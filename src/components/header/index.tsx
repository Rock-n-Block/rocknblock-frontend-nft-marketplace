import { FunctionalComponent, h } from 'preact';
import { useState } from "preact/hooks";
import style from './style.scss';

const Header: FunctionalComponent = () => {
  const [burger, setBurger] = useState('');

  const switchIcon = (): void => {
    setBurger(burger === '' ? '-close' : '');
  }

  return (
    <header>
      <div class={style.container}>
        <nav class={style['main-nav']}>
          <section class={style['main-nav__mobile']}>
            <a href="#" class={style.logo}>
              <img src="../../assets/img/icons/logo.svg" alt="Rock'n'Block" />
            </a>
            <div
              class={`${style.burger} ${style.icon} ${style['icon-burger']}`}
              onClick={(): void => switchIcon()}
            >
              <img src={`../../assets/img/icons/icon-header-burger${burger}-mask.svg`} alt={`burger ${burger}`} />
            </div>
          </section>
          <section id="nav-pages" class={`${style['nav-pages']} ${burger === '' ? null : style.topnav}`}>
            <a
              href="#services"
              class={style['nav-pages__link']}
              onClick={(): void => switchIcon()}
            >Services</a>
            <a
              href="#cases"
              class={style['nav-pages__link']}
              onClick={(): void => switchIcon()}
            >Cases</a>
            <a
              href="#team"
              class={style['nav-pages__link']}
              onClick={(): void => switchIcon()}
            >Team</a>
            <a
              href="#partners"
              class={style['nav-pages__link']}
              onClick={(): void => switchIcon()}
            >Partners</a>
            <a
              href="#contact-us"
              class={burger === '' ? style['nav-pages__contact-button'] : style['nav-pages__link']}
              onClick={(): void => switchIcon()}
            >{burger === '' ? 'CONTACT US' : 'Contact us'}</a>
          </section>
        </nav>
      </div>
    </header>
  );
};

export default Header;
