import { FunctionalComponent, h } from 'preact';

import style from './style.scss';

const TelegramWidget: FunctionalComponent = () => (
  <a href='https://t.me/joinchat/WG1xLuqY2uUgc_HH' target="_blank" className={style.container} rel="noreferrer">
    <img className={style.tg__logo} src="../../assets/img/tg-logo.png" alt="tg-widget-logo" />
  </a>
);

export default TelegramWidget;
