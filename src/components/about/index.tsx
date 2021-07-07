import {FunctionalComponent, h} from 'preact';

import style from './style.scss';

const About: FunctionalComponent = () => {
  return (
    <div className={`${style.about} ${style.container}`}>
      <div className={`${style['background-img']} ${style['background-img-first']}`}>
        <img src="../../assets/img/background-about-1.png" alt="background-img" />
      </div>
      <div className={`${style['background-img']} ${style['background-img-second']}`}>
        <img src="../../assets/img/background-about-2.png" alt="background-img" />
      </div>
      <div className={`${style['background-img']} ${style['background-img-third']}`}>
        <img src="../../assets/img/background-about-3.png" alt="background-img" />
      </div>
      <h2 className={style['about__header']}>
        Your Blockchain Developers
      </h2>
      <div className={style['about__content']}>
        <div className={style['about__content-item']}>
          <p className={style['about__description']}>
            Since 2017 Rock’n’Block developed <b>250+</b> solutions of different complexity.
            Ready to bring your idea to life.
          </p>
          <section className={style['about__buttons']}>
            <a
              href="https://calendly.com/alex-tka"
              rel="noreferrer"
              target="_blank"
              className={`${style['about__buttons-call']} ${style.btn} ${style['btn-hollow']} ${style['btn-rounded']}`}
            >Book a call</a>
            <a
              href="#contact-us"
               className={`${style['about__buttons-contact']} ${style.btn} ${style['btn-orange']} ${style['btn-rounded']}`}
            >
              Contact Us
              <img src="../../assets/img/icons/icon-arrow-right-mask.svg" alt="arrow-right" />
            </a>
          </section>
        </div>
        <div className={style['about__content-item']}>
          <div className={style.about__achievements}>
            <img
              className={style.about__achievements__top}
              src="../../assets/img/achievement.png"
              alt="achievement" />
            <img src="../../assets/img/achievements.png" alt="our achievements" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;