import {FunctionalComponent, h} from 'preact';

type CaseStudiesContentProps = {
  style: any;
  source: string;
  alt: string;
  name: string;
  number: number;
  activeBtn: number;
  setBtn: Function;
}

const CaseStudiesContent:
  FunctionalComponent<CaseStudiesContentProps> = (
  {
    style,
    source,
    alt,
    name,
    number,
    activeBtn,
    setBtn
  }) => {
  const handleSwitch = (): void => {
    setBtn(number)
  }

  return (
    <button
      className={`${style['case-studies__content-item']} ${style['content-item']} ${activeBtn === number ? style.active : null}`}
      onClick={(): void => handleSwitch()}
    >
      <img className={style['content-item__img']} src={`../../assets/img/${source}.svg`} alt={alt} />
      <h4 className={style['content-item__name']}>{name}</h4>
    </button>
  )
}
export default CaseStudiesContent;