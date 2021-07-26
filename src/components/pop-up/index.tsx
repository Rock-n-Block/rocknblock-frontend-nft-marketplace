import { FunctionalComponent, h } from 'preact';

import style from './style.scss';
import { useState } from 'preact/hooks';

const PopUp: FunctionalComponent = () => {
  const [close, setClose] = useState(false);

  const closePopup = () => {
    window.sessionStorage.setItem('isPopupClosed', 'yes');
    setClose(true);
  }

  if (!close) return (
    <div className={style.popup}>
      <button className={style.btn__close} onClick={() => closePopup()}>
        <img src="../../assets/img/icons/icon-close.svg" alt="icon close" />
      </button>
      <p>
        We use cookies to ensure that we give you the best experience on our website.
        <a href="/privacy-policy" target='_top'> Privacy policy</a>
      </p>
      <button className={style.btn__accept} onClick={() => closePopup()}>Accept</button>
    </div>
  )
  return null
}

export default PopUp;
