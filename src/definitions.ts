export const RECAPTCHA_KEY = '6LeAl3gbAAAAAN4CaBjcOXYuHoJLjfx0nAs72159';

export const isBrowser = typeof window !== 'undefined';

export interface GoogleReCaptcha {
  execute: () => void;
  reset: () => void;
  getResponse: () => string;
}

export interface ProjectWindow extends Window {
  grecaptcha: GoogleReCaptcha;
  grecaptchaTokenResponse: (token: string) => void;
  grecaptchaExpired: () => void;
}