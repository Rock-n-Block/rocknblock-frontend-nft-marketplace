import { FunctionalComponent, h } from 'preact';
import { useState } from "preact/hooks";
import style from './style.scss';

const Header: FunctionalComponent = () => {
  const [burger, setBurger] = useState('');

  const switchIcon = (e: Event | undefined) => {
    setBurger(burger === '' ? '-close' : '');
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (e.target.classList !== "burger-change") {
      const navPages = document.getElementById("nav-pages");
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      navPages.classList.toggle("topnav");
    }
  }

  return (
    <header>
      <div class={style.container}>
        <nav class={style['main-nav']}>
          <section class={style['main-nav__mobile']}>
            <a href="#" class={style.logo}>
              <img src="../../assets/img/logo.png" alt="Rock'n'Block" />
            </a>
            <div
              class={`${style.burger} ${style.icon} ${style['icon-burger']}`}
              onClick={() => switchIcon(event)}
            >
              <img src={`../../assets/img/icons/icon-header-burger${burger}-mask.svg`} alt={`burger ${burger}`} />
            </div>
          </section>
          <section id="nav-pages" class={`${style['nav-pages']} ${burger === '' ? null : style.topnav}`}>
            <a href="#services" class={style['nav-pages__link']}>Services</a>
            <a href="#cases" class={style['nav-pages__link']}>Cases</a>
            <a href="#team" class={style['nav-pages__link']}>Team</a>
            <a href="#partners" class={style['nav-pages__link']}>Partners</a>
            <a href="#contact-us" class={style['nav-pages__contact-button']}>CONTACT US</a>
          </section>
        </nav>
      </div>
    </header>
  );
};

export default Header;
