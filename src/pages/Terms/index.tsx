import { FunctionalComponent, h } from 'preact';
import {useState} from 'preact/hooks';
import * as smoothscroll from 'smoothscroll-polyfill';
import {Terms, UpButton} from "../../components";

const TermsPage: FunctionalComponent = () => {
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
      <Terms />
      {isActive ? <UpButton /> : null}
    </div>
  )
};

export default TermsPage;

