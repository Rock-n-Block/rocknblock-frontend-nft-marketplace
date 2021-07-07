import {FunctionalComponent, h} from 'preact';

import style from './style.scss';

const UpButton: FunctionalComponent = () => {
  return (
    <div className={style['arrow-top']}>
      <a
        href="#"
        title="Go to top"
        id="button-to-the-top"
      >
        <img
          src="../../assets/img/icons/icon-arrow-top-mask.svg"
          alt="arrow top"
        />
      </a>
    </div>
  )
}

export default UpButton;