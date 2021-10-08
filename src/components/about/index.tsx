import {FunctionalComponent, h} from 'preact';

import style from './style.scss';

const About: FunctionalComponent = () => {
    return (
        <div className={style.about}>
            <img className={style['about__title-img']} src='../../assets/img/10knft/10knft-title.svg' />
            <img className={style['about__desc-img']} src='../../assets/img/10knft/10knft-desc.svg' />
            <h2>Generate 10,000 randomly created NFTs based on traits like CryptoPunks</h2>
            <img className={style['about__art-img']} src='../../assets/img/10knft/10knft-arts.svg' />
            <img className={style['about__bg']} src='../../assets/img/10knft/art-bg.svg' />
        </div>
    )
};

export default About;
