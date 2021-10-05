import {FunctionalComponent, h} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import {getCurrentUrl} from 'preact-router'
import style from './style.scss';

interface NavPages {
    title: string;
    href: string;
}

const navPages: NavPages[] = [
    {
        title: 'Services',
        href: "#services"
    },
    {
        title: 'Cases',
        href: "#cases"
    },
    {
        title: 'Team',
        href: "#team"
    },
    {
        title: 'Partners',
        href: "#partners"
    },
    {
        title: 'Blog',
        href: "#blog"
    },

];

const Header: FunctionalComponent = () => {
    const [burger, setBurger] = useState('');
    const [isHomePage, setIsHomePage] = useState<boolean>(false);
    const location = getCurrentUrl();

    const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);

    const [scrollY, setScrollY] = useState(0);

    const logit = () => {
        setScrollY(window.pageYOffset);
        if (scrollY > 100) {
            setIsHeaderTransparent(true)
        } else setIsHeaderTransparent(false)
    }

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });


    useEffect(() => {
        if (location !== '/staking') {
            setIsHomePage(true)
        } else setIsHomePage(false)
    }, [location])

    const switchIcon = (): void => {
        setBurger(burger === '' ? '-close' : '');
    }

    return (
        <header className={!isHeaderTransparent ? style['bg-transparent'] : ''}>
            <div className={style.container}>
                <nav className={style['main-nav']}>
                    <section className={`${style['main-nav__mobile']}`}>
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
                        {isHomePage &&
                        navPages.map((item: NavPages, index: number) =>
                            <a
                                href={item.href}
                                key={`${item.href}_${index}`}
                                className={style['nav-pages__link']}
                                onClick={(): void => switchIcon()}
                            >{item.title}</a>
                        )
                        }
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
