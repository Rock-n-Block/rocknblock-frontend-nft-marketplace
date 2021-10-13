import { FunctionalComponent, h } from 'preact';
import style from './style.module.scss';

const WhatIsAn: FunctionalComponent = () => {

  return (
    <div class={style.block}>
      <img class={`${style.imgGroup} ${style.imgGroupLeft}`} src="../../assets/img/marketplacePage/groupLeft.png" alt="image450.png" />
      <img class={`${style.imgGroup} ${style.imgGroupRight}`} src="../../assets/img/marketplacePage/groupRight.png" alt="image450.png" />
      <h1 class={style.title}>What is an<div class={style.redText}>NFT Marketplace?</div></h1>
      <p class={style.secondText} >The NFT Marketplace is an adaptive online platform that provides access to offers to sell and buy non-circulating tokens powered by NFT technology. Popular objects include various texts, digital images, and artworks, game characters, financial instruments, and domain names. 
      <br /><br />
      A competently designed marketplace will enable a close connection between the seller and the interested user, providing a place to place trade offers. Users will have at their disposal a digital catalog and a personal account, with the help of which it will be possible to carry out the most secure and expedited transactions.
      </p>
      <div class={style.ellipse}>ellipse</div>
      <img class={style.imgStatue} src="../../assets/img/marketplacePage/image448.png" alt="image448.png" />
      <img class={style.redParalleogram} src="../../assets/img/marketplacePage/redParallelogram.svg" alt="redParallelogram-img" />
      <img class={style.imgLaptop} src="../../assets/img/marketplacePage/laptop.png" alt="image450.png" />
    </div>
  );
};

export default WhatIsAn;
