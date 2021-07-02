import { FunctionalComponent, h } from 'preact';
import BlockHeader from '../block-header';

import style from './style.scss';

const cards = [
  {
    number: '250+',
    units: 'projects',
    text: 'created on-a-turn-key basis'
  },
  {
    number: '15000+',
    units: '',
    text: 'smart contracts deployed'
  },
  {
    number: '50+',
    units: 'team',
    text: 'members (mostly developers)'
  },
  {
    number: '1Bn+',
    units: 'dollar',
    text: 'capitalization of the  projects we have built'
  },
  {
    number: '15+',
    units: 'years',
    text: 'of development experience'
  },
  {
    number: 'ANY',
    units: 'blockchain',
    text: 'integration with and development'
  },
];

const WhyUs: FunctionalComponent = () => {
  return (
    <div className={`${style['why-us']} ${style.container}`}>
      <BlockHeader style={style} primary="Why Us?" />
      <div className={style['why-us__content']}>
        {cards.map(card => (
          <div className={style['why-us__card']} key={card.number}>
            <p className={style['why-us__card__primary']}>
              <span className={style['why-us__card-numbers']}>{card.number}</span>
              <span className={style['why-us__card-units']}>{card.units}</span>
            </p>
            <p className={style['why-us__card__secondary']}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyUs;