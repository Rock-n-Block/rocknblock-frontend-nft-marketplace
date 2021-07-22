import { FunctionalComponent, h } from 'preact';
import PrivacyPolicy from '../../components/privacy-policy';
import UpButton from '../../components/up-button';
import { useState } from 'preact/hooks';
import * as smoothscroll from 'smoothscroll-polyfill';

const PrivacyPolicyPage: FunctionalComponent = () => {
  const [isActive, setIsActive] = useState(false);

  if (typeof window !== 'undefined') {
    window.onscroll = (): void => {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }

    smoothscroll.polyfill();
  }

  return (
    <div>
      <PrivacyPolicy />
      {isActive ? <UpButton /> : null}
    </div>
  )
};

export default PrivacyPolicyPage;
