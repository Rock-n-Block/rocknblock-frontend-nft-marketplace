import { FunctionalComponent, h } from 'preact';
import style from './style.module.scss';

type CardType = 'horizontal' | 'vertical';

interface Card {
  title: string;
  description: string;
  imgUrl: string;
  type: CardType;
}

const cardData: Card[] = [
  {
    title: 'Scarcity',
    description: 'The value of the NFTs is always increasing due to their scarce nature. The developers program the platform in a way that only a certain amount of NFTs are produced.',
    imgUrl: '../../assets/img/marketplacePage/cardScarcity.svg',
    type: 'horizontal'
  },
  {
    title: 'Uniqueness',
    description: 'Since NFTs are unique, they are not interchangeable. Thus, the information regarding the NFTs cannot be altered and it provides the certification for the authenticity of the digital assets.',
    imgUrl: '../../assets/img/marketplacePage/cardUniqueness.svg',
    type: 'horizontal'
  },
  {
    title: 'Transparency',
    description: 'Since NFT are developed on a decentralized ecosystem, the information and data regarding the transactions are verified publicly. Hence NFT provides high-level transparency',
    imgUrl: '../../assets/img/marketplacePage/cardTransparency.svg',
    type: 'vertical'
  },
]

interface Pros {
  card: Card;
}

const Card: FunctionalComponent<Pros> = ({card}: Pros) => {
  return (
    <div class={`${style.card} ${card.type === 'horizontal' ? style.cardHorizontal : style.cardVertical}`}>
      <img class={style.img} src={card.imgUrl} />
      <div class={style.cardInfo}>
        <h2 class={style.cardTitle}>{card.title}</h2>
        <div class={style.cardDescription} >{card.description}</div>
      </div> 
    </div>
  );
};

const Features: FunctionalComponent = () => {
  return (
    <div class={style.block}>
      <h1 class={style.title}>Features of NFT Marketplace</h1>
      <div class={style.secondText} >Check the various features that will help your platform users.</div>
      <div class={style.cardsContainer}>
        {cardData.map((item, i) => <Card key={i} card={item} />)}
      </div>
    </div>
  );
};

export default Features;
