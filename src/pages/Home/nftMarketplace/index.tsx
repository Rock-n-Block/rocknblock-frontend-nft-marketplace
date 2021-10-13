import { FunctionalComponent, h } from 'preact';
import { route } from 'preact-router';
import { Button } from '../../../components';
import style from './style.module.scss';

const NftMarketplace: FunctionalComponent = () => {

  return (
    <div class={style.block}>
      <h1 class={style.title}>NFT MARKETPLACE Development Services</h1>
      <div class={style.secondText} >We help you launch your own NFT marketplace that gives your customers a seamless buying experience.</div>
      <img class={style.img} src="../../assets/img/marketplacePage/redParallelogram.svg" alt="redParallelogram-img" />
      <Button customStyle={style.button}
        action={(): void => {window.open('/#contact-us', '_self')}}
        name='Get free consultation' type='withIcon' 
      />
      <div class={style.background} />
      <div class={style.imgStatue} />
    </div>
  );
};

export default NftMarketplace;
