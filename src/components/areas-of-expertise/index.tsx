import { FunctionalComponent, h } from 'preact';

import style from './style.scss';
import BlockHeader from "../block-header";

const cards = [
  {
    source: 'blockchain',
    title: 'BLOCKCHAIN',
    text: 'Smart contracts of any complexity on any blockchain. From custom token creation to decentralized exchange on-a-turn-key basis.'
  },
  {
    source: 'bridge',
    title: 'LAYER TWO',
    text: 'From multiple blockchain bridges to complete Layer 2 solution tailored for your project.'
  },
  {
    source: 'mobile',
    title: 'MOBILE AND WEB:',
    text: 'Android/iOS applications; Project management interfaces; Investors cabinets; top-notch UX/UI, etc.'
  },
  {
    source: 'wallet',
    title: 'WALLETS',
    text: 'High security level browser and mobile crypto wallets with generation system, private keys storage, stable (and other types) coin support and crypto/fiat acquiring.'
  },
  {
    source: 'audit',
    title: 'AUDIT',
    text: 'Full review of your system’s architecture and codebase. We make sure, that your distributed systems work as you intended.'
  },
  {
    source: 'documentation',
    title: 'DOCUMENTATION',
    text: 'Project architecture development. Technical specifications and decompositions of your ideas. Whitepapers, light papers etc.'
  },
]

const AreasOfExpertise: FunctionalComponent = () => {
  return (
    <div id="services" className={`${style['areas-of-expertise']} ${style.container}`}>
      <div className={style['background-img']}>
        <img src="../../assets/img/background-areas.png" alt="background-img" />
      </div>
      <BlockHeader style={style} primary="Areas of Expertise" />
      <div className={style['areas-of-expertise__cards']}>
        {cards.map(card => (
          <div className={style['areas-of-expertise__card']} key={card.source}>
            <div className={style['icon-container']}>
              <div className={style.icon}>
                <img src={`../../assets/img/icons/icon-area-${card.source}-mask.svg`} alt={card.source} />
              </div>
            </div>
            <h3 className={style['areas-of-expertise__card-name']}>{card.title}</h3>
            <p className={style['areas-of-expertise__card-description']}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AreasOfExpertise;