import {FunctionalComponent, h} from 'preact';

import style from './style.scss';
import BlockHeader from "../block-header";

const cards = [
  {
    source: 'icon-do-best-smart-contracts',
    alt: 'crypto icons',
    text: 'Smart contracts on various blockchains'
  },
  {
    source: 'icon-do-best-bank',
    alt: 'bank icon',
    text: 'Custom token creation (incl. NFTs)'
  },
  {
    source: 'icon-do-best-swap',
    alt: 'swap icon',
    text: 'Token SWAP'
  },
  {
    source: 'icon-do-best-rock',
    alt: 'rock sign icon',
    text: 'Airdrop'
  },
  {
    source: 'icon-do-best-bridges',
    alt: 'Bridges icon',
    text: 'Bridges development'
  },
  {
    source: 'icon-do-best-l2',
    alt: 'L2 icon',
    text: 'L2 implementation'
  },
  {
    source: 'icon-do-best-tangem',
    alt: 'phone with card icon',
    text: 'NFT card support'
  },
  {
    source: 'icon-do-best-DAPPs',
    alt: 'DAPPs icon',
    text: 'DAPPs development'
  },
  {
    source: 'icon-do-best-moon',
    alt: 'moon icon',
    text: 'Fiat On-Ramp Integration'
  },
  {
    source: 'icon-do-best-OTC',
    alt: 'graph icon',
    text: 'Decentralized OTC development'
  },
  {
    source: 'icon-do-best-wallet',
    alt: 'wallet icon',
    text: 'Multiple wallets management tool'
  },
  {
    source: 'icon-do-best-anon',
    alt: 'anon icon',
    text: 'Anonymized exchange'
  },
  {
    source: 'icon-do-best-contract',
    alt: 'contract icon',
    text: 'Smart contract audit'
  },
  {
    source: 'icon-do-best-phone',
    alt: 'phone icon',
    text: 'iOS / Android App development'
  },
  {
    source: 'icon-do-best-shield',
    alt: 'shield icon',
    text: 'Explorers for private blockchain'
  },
]

const WhatWeDoBest: FunctionalComponent = () => {
  return (
    <div className={`${style['what-we-do-best']} ${style.container}`}>
      <BlockHeader
        style={style}
        primary="What we do Best?"
        secondary="We are ready to take on a blockchain project of any complexity, from the stage of idea development to final implementation. Here are the most popular requests we receive regularly:"
      />
      <div className={style.scroll}>
        <div className={style['what-we-do-best__cards']}>
          {cards.map(card => (
            <div className={style['what-we-do-best__card']} key={card.source}>
              <img className={style.icon} src={`../../assets/img/${card.source}.png`} alt={card.alt} />
              <p className={style['what-we-do-best__description']}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default WhatWeDoBest;