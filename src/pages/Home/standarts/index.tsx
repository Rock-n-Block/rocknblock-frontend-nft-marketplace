import { FunctionalComponent, h } from 'preact';
import style from './style.module.scss';

interface Card {
  title: string;
  titleRed: string;
  description: string;
  imgUrl: string;
}

const cardData: Card[] = [
  {
    title: 'ERC 721 ',
    titleRed: 'Single',
    description: 'if you want your collectible to be one of a kind',
    imgUrl: '../../assets/img/marketplacePage/721.svg',

  },
  {
    title: 'TRC 721 ',
    titleRed: 'Single',
    description: 'if you want your collectible to be one of a kind',
    imgUrl: '../../assets/img/marketplacePage/721.svg',
  },
  {
    title: 'ERC 1155 ',
    titleRed: 'Multiple',
    description: 'if you want to sell one collectible multiple times',
    imgUrl: '../../assets/img/marketplacePage/1155.svg',
  },
]

interface Pros {
  card: Card;
}

const Card: FunctionalComponent<Pros> = ({card}: Pros) => {
  return (
    <div class={`${style.card}`}>
      <img class={style.img} src={card.imgUrl} />
      <div class={style.cardInfo}>
        <h2 class={style.cardTitle}>
          {card.title}
          <div class={style.titleRed}>{card.titleRed}</div>
        </h2>
        <div class={style.cardDescription} >{card.description}</div>
      </div> 
    </div>
  );
};

const Standarts: FunctionalComponent = () => {
  return (
    <div class={style.block}>
      <div class={style.ellipse}>ellipse</div>
      <h2 class={style.title}>NFT Standards</h2>
      <div class={style.cardsImg} />
      <div class={style.cardsContainers}>
        {cardData.map((item, i) => <Card key={i} card={item} />)}
      </div>
    </div>
  );
};

export default Standarts;
