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

const achievements = [
  {
    src: '../../assets/img/logo-achieve-1.svg',
    url: 'https://techreviewer.co/companies/rock-n-block'
  },
  {
    src: '../../assets/img/logo-achieve-2.png',
    url: 'https://topappdevelopmentcompanies.com/ru/directory/blockchain-developers/russia'
  },
  {
    src: '../../assets/img/logo-achieve-3.png',
    url: 'https://www.itfirms.co/top-blockchain-development-companies/'
  },
  {
    src: '../../assets/img/logo-achieve-4.svg',
    url: 'https://www.designrush.com/agency/blockchain-development-companies'
  }
]

const OurPartners: FunctionalComponent = () => {
  return (
    <div className={`${style['our-partners']} ${style.container}`} id="partners">
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
      <div className={style.achievements}>
        {achievements.map((achieve, index) => (
          <a className={style.achieve} key={index} href={achieve.url} rel="noreferrer" target="_blank">
            <img src={achieve.src} alt={`achieve ${index + 1}`} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default OurPartners;