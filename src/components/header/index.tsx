import {Fragment, FunctionalComponent, h} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import {getCurrentUrl} from 'preact-router'
import style from './style.scss';

const Header: FunctionalComponent = () => {
    const [burger, setBurger] = useState('');
    const [isHomePage, setIsHomePage] = useState<boolean>(false);
    const [isLogoCenter, setIsLogoCenter] = useState<boolean>(false);
    const location = getCurrentUrl();

    useEffect(() => {
        if (location !== '/staking') {
            setIsHomePage(true)
        } else setIsHomePage(false)
        if (location === '/company') {
            setIsLogoCenter(true)
        } else setIsLogoCenter(false)

        console.log(location)
    }, [location])


    const switchIcon = (): void => {
        setBurger(burger === '' ? '-close' : '');
    }

    return (
        <header>
            <div className={style.container}>
                <nav className={style['main-nav']}>
                    <section className={`${style['main-nav__mobile']} ${isLogoCenter ? style['justify-center'] : ''}`}>
                        <a href="/" className={style.logo}>
                            <img src="../../assets/img/icons/logo.svg" alt="Rock'n'Block logo" />
                        </a>
                        <div
                            className={`${style.burger} ${style.icon} ${style['icon-burger']}`}
                            onClick={(): void => switchIcon()}
                        >
                            <img src={`../../assets/img/icons/icon-header-burger${burger}-mask.svg`}
                                 alt={`burger ${burger}`} />
                        </div>
                    </section>
                    <section id="nav-pages"
                              className={`
                             ${style['nav-pages']} 
                             ${!isHomePage ? style['justify-end'] : ''}
                             ${burger === '' ? null : style.topnav} 
                              `}>
                        {isHomePage && <Fragment>
                            <a
                                href="#services"
                                className={style['nav-pages__link']}
                                onClick={(): void => switchIcon()}
                            >Services</a>
                            <a
                                href="#cases"
                                className={style['nav-pages__link']}
                                onClick={(): void => switchIcon()}
                            >Cases</a>
                            <a
                                href="#team"
                                className={style['nav-pages__link']}
                                onClick={(): void => switchIcon()}
                            >Team</a>
                            <a
                                href="#partners"
                                className={style['nav-pages__link']}
                                onClick={(): void => switchIcon()}
                            >Partners</a>
                        </Fragment>}
                        <a
                            href="#contact-us"
                            className={`${style['nav-pages__contact-button']} ${style['nav-pages__link']} ${style['nav-pages__link__contact-us']}`}
                            onClick={(): void => switchIcon()}
                        >CONTACT US</a>
                    </section>
                </nav>
            </div>
        </header>
    );
};

export default Header;
