import { FunctionalComponent, h } from 'preact';
import { cardData } from './mock';
import style from './style.module.scss';

interface Card {
  title: string;
  titleRed: string;
  description: string;
  imgUrl: string;
}

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
      <div class={style.cardsContainers}>
        {cardData.map((item, i) => <Card key={i} card={item} />)}
      </div>
      <div class={style.cardsImg} />
    </div>
  );
};

export default Standarts;
