import { FunctionalComponent, h } from 'preact';
import { Button } from '../../../components';
import style from './style.module.scss';


const OrderDevelopment: FunctionalComponent = () => {
  return (
    <div class={style.block}>
      <div class={style.imgGroup}>
        <div class={style.ellipse} />
        <div class={style.orderDevelopmentImg} />
      </div>
      <img class={style.infoBG} src="../../assets/img/marketplacePage/infoBG.png" />
      <div class={style.info}>
        <h1 class={style.title}>Order development of NFT Marketplace</h1>
        <div class={style.secondText} >
          Our company develops an NFT marketplace on a turnkey basis. The specialists comprehensively assess the client's needs and create based on the set task a fully ready-to-launch platform with a good design and simple controls that will be understandable even to novice users of the market.
          <br /><br />
          We assess the user's needs for a quick payback on the platform and use clear tools to place offers to buy and sell non-mutually exchangeable tokens.
        </div>
        <Button
          action={(): void => {window.open('/#contact-us', '_self')}}
          name={'Contact Us'} type={'withIcon'} />
      </div>
    </div>
  );
};

export default OrderDevelopment;
