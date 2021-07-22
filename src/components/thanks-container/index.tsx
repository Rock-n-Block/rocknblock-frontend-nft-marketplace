import { FunctionalComponent, h } from 'preact';

import style from './style.scss';

const ThanksContainer: FunctionalComponent = () => (
  <div className={style.container}>
    <img src="../../assets/img/background-partners.png" alt="bg img" className={style.bg__4} />
    <img src="../../assets/img/background-about-3.png" alt="bg img" className={style.bg__3} />

    <div className={style.logo}>
      <img src="../../assets/img/background-about-1.png" alt="bg img" className={style.bg__1} />
      <img src="../../assets/img/background-about-2.png" alt="bg img" className={style.bg__2} />
      <a href="/">
        <img src="../../assets/img/icons/logo.svg" alt="R'n'B logo" />
      </a>
    </div>
    <h2 className={style.header}>THANKS!<br />YOU'RE BOOKED.</h2>
    <p className={style.text}>
      We’re looking forward to your demo. If you have any questions prior to your demo feel free to contact us.
    </p>
    <a className={style.link} href='mailto:hello@rocknblock.io'>
      hello@rocknblock.io
    </a>
  </div>
)

export default ThanksContainer;
