import {FunctionalComponent, h} from 'preact';

import style from './style.scss';

const UpButton: FunctionalComponent = () => {
  return (
    <a
      className={style['arrow-top']}
      href="#"
      title="Go to top"
      id="button-to-the-top"
    >
      <img
        src="../../assets/img/icons/icon-arrow-top-mask.svg"
        alt="arrow top"
      />
    </a>
  )
}

export default UpButton;