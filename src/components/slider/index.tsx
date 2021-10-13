import { FunctionalComponent, h } from "preact";
import style from './style.scss';
import { useRef, useState } from "preact/hooks";



interface SlideProps {
  imgUrl: string;
  slideStyle: string;
}

const Slide: FunctionalComponent<SlideProps> = ({imgUrl, slideStyle}: SlideProps) => {
  return <img class={`${style.slide} ${slideStyle}`} src={imgUrl} />
}



interface Props {
  slideStyle: string;
  data: string[];
}

const Slider: FunctionalComponent<Props> = ({data, slideStyle}: Props) => {
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef<HTMLHeadingElement>(null);

  const onClickRight = (): void => {
    const sliderContainer = sliderRef.current;
    if (sliderContainer !== null && sliderContainer.firstChild instanceof HTMLElement
      && sliderContainer.lastChild instanceof HTMLElement) {

      const nodeStyle = window.getComputedStyle(sliderContainer.firstChild)
      const slideMarginRight: string = nodeStyle.getPropertyValue('margin-left')
      const delta = sliderContainer.firstChild.offsetWidth + Number.parseInt(slideMarginRight)

      if (- sliderContainer.lastChild.offsetLeft + sliderContainer.offsetWidth - delta === offset) {
        setOffset(0)
      } else if (delta - offset + sliderContainer.offsetWidth < data.length * delta) {
        setOffset(offset - delta)
      } else {
        console.log(- sliderContainer.lastChild.offsetLeft + sliderContainer.offsetWidth)
        setOffset(- sliderContainer.lastChild.offsetLeft + sliderContainer.offsetWidth - delta)
      }
    }
  }

  const onClickLeft = (): void => {
    const sliderContainer = sliderRef.current;
    if (sliderContainer !== null && sliderContainer.firstChild instanceof HTMLElement 
      && sliderContainer.lastChild instanceof HTMLElement) {
      const nodeStyle = window.getComputedStyle(sliderContainer.firstChild)
      const slideMarginRight: string = nodeStyle.getPropertyValue('margin-left')
      const delta = sliderContainer.firstChild.offsetWidth + Number.parseInt(slideMarginRight)

      if (offset === 0) {
        setOffset(- sliderContainer.lastChild.offsetLeft + sliderContainer.offsetWidth - delta)
      } else if ( offset + delta < 0) setOffset(offset + delta);
      else setOffset(0);
    }
  }

  return (
    <div class={style.block}>
      <div class={style.sliderContainer}>
        <div class={style.slider}
          ref= {sliderRef}
          style={{
            transform: `translateX(${offset}px)`, 
            transitionDuration: '0.5s'
          }}>
          {data && data.map((url, i) => <Slide key={i} imgUrl={url}  slideStyle={slideStyle} />)}
        </div>
      </div>
      <div class={style.navigation}>
        <img class={style.navIcon} src="/assets/img/icons/toLeft.svg" onClick={onClickLeft} />
        <img class={style.navIcon} src="/assets/img/icons/toRight.svg" onClick={onClickRight} />
      </div>
    </div>
  )
}

export default Slider;