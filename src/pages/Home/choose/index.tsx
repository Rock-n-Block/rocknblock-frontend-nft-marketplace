import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.module.scss';

interface SlideProps {
  title: string;
  description: string;
}


const Slide: FunctionalComponent<SlideProps> = ({title, description}: SlideProps) => {
  return (
    <div class={style.blockSlide}>
      <div class={style.slideTitle} >{title}</div>
      <div class={style.slideDescription}>{description}</div>
    </div>
  )
}

const Choose: FunctionalComponent = () => {
  const [sliderData, setSliderData] = useState([
    {title: '250+ Projects', description: 'created on-a-turn-key basis'},
    {title: '1 Bn+ dollar', description: 'capitalization of the projects we have built'},
    {title: '15 000+', description: 'smart contracts deployed'},
    {title: '15+ years', description: 'of development experience'},
    {title: '50+ Team', description: 'members (mostly developers)'},
  ])

  const onClickLeft = () => {
    const slider = [...sliderData.slice(1), sliderData[0]]
    setSliderData(slider)
  }

  const onClickRight = () => {
    const slider = [sliderData[sliderData.length -1], ...sliderData.slice(0, sliderData.length - 1)]
    setSliderData(slider)
  }

  return (
    <div class={style.block}>
      <h2 class={style.title}>
        Why Choose Rock'n'Block for NFT Marketplace Development?
      </h2>
      <div class={style.secondText} >Here are your benefits of doing business with us.</div>
      <div class={style.sliderContainerWrapper}>
        <div class={style.leftShadowBlock} />
        <div class={style.rightShadowBlock} />
        <img class={style.redLine} src="assets/img/marketplacePage/Line2.png" />
        <div class={style.sliderContainer}>
          {sliderData.map((item: SlideProps, i) => <Slide key= {i} title={item.title} description={item.description} />)}
        </div>
        <img class={style.redLine} src="assets/img/marketplacePage/Line16.png" />
      </div>
      <div class={style.navigation}>
        <img class={style.navIcon} src="/assets/img/icons/toLeft.svg" onClick={onClickLeft} />
        <img class={style.navIcon} src="/assets/img/icons/toRight.svg" onClick={onClickRight} />
      </div>
    </div>
  );
};

export default Choose;
