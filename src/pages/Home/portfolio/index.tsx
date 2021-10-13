import { FunctionalComponent, h } from 'preact';
import { Slider } from '../../../components';
import style from './style.module.scss';

const sliderData: string[] = [
  '/assets/img/marketplacePage/sliderPortfolio/slide1.png',
  '/assets/img/marketplacePage/sliderPortfolio/slide2.png',
  '/assets/img/marketplacePage/sliderPortfolio/slide3.png',
  '/assets/img/marketplacePage/sliderPortfolio/slide4.png',
  '/assets/img/marketplacePage/sliderPortfolio/slide5.png',
]


const Portfolio: FunctionalComponent = () => {

  return (
    <div class={style.block}>
      <h1 class={style.title}>PORTFOLIO</h1>
      <div>
        <Slider slideStyle={style.slideProfile} data={sliderData} />
      </div>
    </div>
  );
};

export default Portfolio;
