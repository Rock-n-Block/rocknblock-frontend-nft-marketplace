import {h} from "preact";
import {useState, useRef, useEffect} from "preact/hooks";

import {
  getProjectWindow,
  injectScript,
  removeScript
} from '../helpers/html-dom';


interface GoogleReCaptchaOptions {
  siteKey: string;
  language?: string;
}

interface GoogleReCaptchaV2HookReturn {
  reCaptchaResponseToken?: string;
  ReCaptchaBadge?: JSX.Element;
  executeReCaptcha: () => Promise<string>;
  resetReCaptcha: () => void;
}

type TGoogleReCaptchaV2Hook = (
  options: GoogleReCaptchaOptions
) => GoogleReCaptchaV2HookReturn;

const ERROR_SCRIPT_NOT_AVAILABLE = 'Google recaptcha is not available';
const GOOGLE_RECAPTCHA_V3_SCRIPT = 'https://www.google.com/recaptcha/api.js';
const SCRIPT_ID = 'google-recaptcha-v2';
const RESPONSE_TIME_DELAY = 2000; // 2s

export const ERROR_TOKEN_FETCH_FAILED =
  'Failed to get the Google ReCaptcha token';

export const useGoogleReCaptchaV2: TGoogleReCaptchaV2Hook = ({
                                                               siteKey,
                                                               language
                                                             }) => {
  const [token, setToken] = useState<string>('');
  const executionTimeoutIDRef = useRef<number>();

  const resetReCaptcha = (): void => {
    const window = getProjectWindow();
    if (!window) {
      return;
    }

    const { grecaptcha } = window;
    if (!grecaptcha) {
      console.error(ERROR_SCRIPT_NOT_AVAILABLE);
    }

    try {
      const { getResponse, reset } = grecaptcha;
      if (getResponse()) {
        reset();
      }
    } catch (e) {}
  };

  const executeReCaptcha = (): Promise<string> => {
    const window = getProjectWindow();
    if (!window) {
      return Promise.reject();
    }

    const { grecaptcha } = window;
    if (!grecaptcha) {
      throw new Error(ERROR_SCRIPT_NOT_AVAILABLE);
    }

    return new Promise<string>((resolve, reject) => {
      if (executionTimeoutIDRef.current) {
        window.clearTimeout(executionTimeoutIDRef.current);
        executionTimeoutIDRef.current = 0;
      }

      window.grecaptchaTokenResponse = (token: any): void => {
        setToken(token);
        resolve(token);
      };
      window.grecaptchaExpired = (): void => reject('grecaptcha-expired');
      window.grecaptcha.execute();

      executionTimeoutIDRef.current = window.setTimeout(() => {
        resetReCaptcha();
      }, RESPONSE_TIME_DELAY);
    });
  };

  const setupGRecaptchaInitialCallbacks = (): void => {
    const window = getProjectWindow();
    if (!window) {
      return;
    }
    window.grecaptchaTokenResponse = (_: never): void => undefined;
    window.grecaptchaExpired = (): void => undefined;
  };

  const onLoadInjectedScript = (): void => {
    const window = getProjectWindow();
    if (!window) {
      return;
    }

    const { grecaptcha } = window;
    if (!grecaptcha) {
      console.warn(ERROR_SCRIPT_NOT_AVAILABLE);
    }
  };

  useEffect(() => {
    const window = getProjectWindow();
    if (!window || !siteKey) {
      return;
    }

    setupGRecaptchaInitialCallbacks();

    const scriptTag = window.document.getElementById(SCRIPT_ID);
    if (!scriptTag) {
      injectScript(
        SCRIPT_ID,
        `${GOOGLE_RECAPTCHA_V3_SCRIPT}?render=onload${
          language ? `&hl=${language}` : ''
        }`,
        onLoadInjectedScript
      );
    }

    return (): void => {
      setupGRecaptchaInitialCallbacks();
      removeScript(SCRIPT_ID);
    };
  }, [siteKey, language]);

  return {
    reCaptchaResponseToken: token,
    executeReCaptcha,
    resetReCaptcha,
    ReCaptchaBadge: (
      <div
        id="recaptcha"
        className="g-recaptcha"
        data-sitekey={siteKey}
        data-size="invisible"
        data-badge="inline"
        data-callback="grecaptchaTokenResponse"
      />
    )
  };
};

export default useGoogleReCaptchaV2;