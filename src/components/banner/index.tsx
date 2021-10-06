import {FunctionComponent, h} from 'preact';
import style from './style.scss';

const Banner: FunctionComponent = () => {
  return (
    <div className={style.content}>
      <a className={`${style.container} ${style.banner}`} href="https://www.futureblockchainsummit.com/" >
          <img className={style.bannerImgInfo} src="../../assets/img/banner17_20/info.png" alt="icon banner" />
          <img className={style.bannerImgDate} src="../../assets/img/banner17_20/date.svg" alt="icon banner" />
      </a>
    </div>
  )
};

export default Banner;