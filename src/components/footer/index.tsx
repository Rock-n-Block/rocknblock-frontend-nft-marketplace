import {FunctionalComponent, h} from 'preact';

import style from './style.scss';
import {useEffect, useState} from "preact/hooks";
import {getCurrentUrl} from "preact-router";

const links = [
    {
        name: 'tw',
        href: 'https://twitter.com/rocknblockdev',
        fullName: 'Twitter'
    },
    {
        name: 'tg',
        href: 'https://t.me/joinchat/WG1xLuqY2uUgc_HH',
        fullName: 'Telegram'
    },
    {
        name: 'fb',
        href: 'https://www.facebook.com/RocknBlockDev/?ref=br_rs',
        fullName: 'Facebook'
    },
    {
        name: 'medium',
        href: 'https://rocknblock.medium.com/',
        fullName: 'Medium'
    },
    {
        name: 'in',
        href: 'https://www.linkedin.com/authwall?trk=ripf&trkInfo=AQHvgveZGbs93QAAAXggz85o2_gQEyTCero1KbSW_FNCIX1sjFUjvezZQqiUuu2cVmo2lj4adoTCg0J8Rvb-V8pKjpQj8U3C5-qT4igU957ofdXB7BvLt6ctemMUWideBHjsZLg=&originalReferer=https://rocknblock.io/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F13060149',
        fullName: 'LinkedIn'
    },
    {
        name: 'mail',
        href: 'mailto:alex.t@mywish.io',
        fullName: 'e-mail'
    }
];

const Footer: FunctionalComponent = () => {
    const [isIconsAvailable, setIsIconsAvailable] = useState<boolean>(true);
    const location = getCurrentUrl();

    useEffect(() => {
        if (location === '/company') {
            setIsIconsAvailable(false)
        } else setIsIconsAvailable(true)

    }, [location])

    return (
        <footer>
            <div className={`${style.container} ${style.footer}`}>
                {isIconsAvailable && <nav className={style['social-links']}>
                    <ul className={style['social-links__list']}>
                        {links.map(link => (
                            <li className={style['social-links__link']} key={link.name}>
                                <a
                                    className={style.icon}
                                    href={link.href}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <img
                                        className={style[`icon-${link.name}`]}
                                        src={`../../assets/img/icons/icon-footer-${link.name}-mask.svg`}
                                        alt={link.name}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>}
                <div className={style.bottom}>
                    <div className={style.links}>
                        <p className={style['bottom__copyright-desktop']}>© Copyright Rock’n’Block 2021</p>
                        <a href="/privacy-policy" target="_top">Privacy Policy</a>
                        <a href="/terms-of-service" target="_top">Terms of Service</a>
                        <a href="/company" target="_top">Company</a>
                    </div>
                    <p className={style['bottom__copyright-mobile']}>© Copyright Rock’n’Block 2021</p>
                </div>
            </div>
            <div class={style.ellipseContainer}>
                <div class={style.ellipse} />
            </div>
        </footer>
    )
}

export default Footer;
