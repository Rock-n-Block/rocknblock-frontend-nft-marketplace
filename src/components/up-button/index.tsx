import { FunctionalComponent, h } from "preact";

import style from '../../style/index.scss';

const UpButton: FunctionalComponent = () => {
  return (
    <a href="#" title="Go to top" id="button-to-the-top">
      <img
        className={`${style.icon} ${style['icon-arrow-top']} ${style['arrow-top']}`}
        src="../../assets/img/icons/icon-arrow-top-mask.svg"
        alt="arrow top"
      />
    </a>
  )
}

export default UpButton;