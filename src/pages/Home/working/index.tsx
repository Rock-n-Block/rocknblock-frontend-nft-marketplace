import { FunctionalComponent, h } from 'preact';
import { Button } from '../../../components';
import style from './style.module.scss';

const options: string[] = [
  'Mint 721 NFT-tokens',
  'Ming 1155 NFT-tokens',
  'Sell / Buy / Auction',
  'Likes',
  'Following',
  'Stories',
  'Import from OpenSea',
  '3d NFTs',
  'Time Auction',
  'Import from everywhere',
  'Perks',
]

interface Card {
  title: string;
  countOptions: number;
  isActive: boolean;
}

const cardData: Card[] = [
  {title: 'Standard', countOptions: 4, isActive: false},
  {title: 'advanced', countOptions: 7, isActive: true},
  {title: 'Premium', countOptions: 11, isActive: false}
]

interface Props {
  card: Card;
}

const Card: FunctionalComponent<Props> = ({card}: Props) => {

  const getOptions = () => {
    return options.map((name, index) => (
        <div key={index} class={style.option}>
          {index < card.countOptions 
            ? <img class={style.checkIcon} src="../../assets/img/icons/Check_fill.svg" />
            : <img class={style.checkIcon} src="../../assets/img/icons/Cancel.svg" />
          }
          <div class={style.name}>{name}</div>
        </div>
    ));
  };

  return (
    <div class={`${style.card} ${card.isActive ? style.currentCard: style.transparentCard }`}>
      <h2 class={style.cardTitle}>{card.title}</h2>
      { card.isActive 
        ? <img class={style.lineIcon} src="../../assets/img/icons/line.svg" /> 
        : <img class={style.lineIcon} src="../../assets/img/icons/Vector66.svg" />}
      {getOptions()}
    </div>
  );
};

const Working: FunctionalComponent = () => {
  return (
    <div class={style.block}>
      <h1 class={style.title}>Working Of NFT Marketplace</h1>
      <div class={style.secondText} >Our team will help you define a stand-out creative direction and will translate it into visual assets that will resonate with your audience. Package offerings include.</div>
      <div class={style.cardsContainerWrapper}>
        <div class={style.cardsContainer}>
          {cardData.map((item, i) => <Card key={i} card={item} />)}
        </div>
      </div>
      <Button customStyle={style.button}
        action={(): void => {window.open('/#contact-us', '_self')}}
        name='Get expert consultation' type='withIcon' />
    </div>
  );
};

export default Working;
