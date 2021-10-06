import {FunctionComponent, h} from 'preact';
import style from './style.scss';


const Banner: FunctionComponent = () => {
  return (
    <div class={style.content}>
      <a class={`${style.container} ${style.banner}`} href="https://www.futureblockchainsummit.com/" >
          <img class={style.bannerImgInfo} src="../../assets/img/banner17_20/info.png" alt="icon banner" />
          <img class={style.bannerImgDate} src="../../assets/img/banner17_20/date.svg" alt="icon banner" />
      </a>
    </div>
  )
};

export default Banner;