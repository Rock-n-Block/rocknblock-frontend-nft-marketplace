import {FunctionalComponent, h} from "preact";
import style from './style.scss';

const HowItWorks: FunctionalComponent = () => {
    return (
        <div className={style['how-it-works']}>
            <h2>How it <span>works</span></h2>
            <img className={style['how-it-works__roadmap']} src='../../assets/img/10knft/10knft-roadmap.svg' alt='roadmap' />
        </div>
    );
};

export default HowItWorks;