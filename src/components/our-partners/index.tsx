import {FunctionalComponent, h} from 'preact';

import style from './style.scss';
import BlockHeader from "../block-header";

const partners = [
  'binance',
  'quras',
  'changelly',
  'polygon',
  'axion',
  'okex',
  'neo',
  'waves',
  'ducatus',
  'enq',
  'tron',
  'bw'
];

const OurPartners: FunctionalComponent = () => {
  return (
    <div className={`${style['our-partners']} ${style.container}`} id="partners">
      <div className={style['background-img']}>
        <img src="../../assets/img/background-partners.png" alt="background-img" />
      </div>
      <BlockHeader style={style} primary="Our partners" />
      <ul className={style['our-partners__partners']}>
        {partners.map(partner => (
          <li className={style['our-partners__partner']} key={partner}>
            <div className={style['img-container']}>
              <img src={`../../assets/img/logo-partners-${partner}.png`} alt={`${partner}`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OurPartners;