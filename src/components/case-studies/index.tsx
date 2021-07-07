import {FunctionalComponent, h} from 'preact';

import style from './style.scss';
import BlockHeader from "../block-header";
import CaseStudiesContent from "../case-studies__content";
import {useState} from "preact/hooks";

const content = [
  [
    {
      source: 'logo-ducatus',
      alt: 'ducatus logo',
      name: 'DUCATUS Wallet',
      number: 1
    },
    {
      source: 'logo-census',
      alt: 'census logo',
      name: 'Census Wallet',
      number: 2
    },
    {
      source: 'logo-quras',
      alt: 'quras logo',
      name: 'QURAS',
      number: 3
    },
    {
      source: 'logo-hex',
      alt: 'hex logo',
      name: 'HEX',
      number: 4
    },
  ],
  [
    {
      source: 'logo-axion',
      alt: 'axion logo',
      name: 'Axion Dashboard',
      number: 1
    },
    {
      source: 'logo-pion',
      alt: 'pion logo',
      name: 'Pion',
      number: 2
    },
    {
      source: 'logo-inflat',
      alt: 'inflat logo',
      name: 'Inflationary Staking',
      number: 3
    },
    {
      source: 'logo-bitgear',
      alt: 'bitgear logo',
      name: 'Bitgear',
      number: 4
    },
    {
      source: 'logo-minto',
      alt: 'minto logo',
      name: 'Minto',
      number: 5
    },
    {
      source: 'logo-ducatus',
      alt: 'ducatus logo',
      name: 'Ducatus',
      number: 6
    },
  ]
];

const dropdown = [
  [
    {
      key: 1,
      name: 'ducatus',
      title: 'DUCATUS Wallet',
      images: [
        '../../assets/img/case-ducatus-1.png',
        '../../assets/img/case-ducatus-2.png',
        '../../assets/img/case-ducatus-3.png'
      ],
      features: [
        'Blockchain developement',
        'Mobile wallet application development',
        'Crowdfunding platform',
        'Online stores with crypto support'
      ],
      stacks: ['Web3js', 'Solidity', 'JavaScript', 'Openzeppelin', 'Truffle']
    },
    {
      key: 2,
      name: 'census',
      title: 'Census Wallet',
      images: [
        '../../assets/img/case-census-1.png',
        '../../assets/img/case-census-2.png',
        '../../assets/img/case-census-3.png'
      ],
      features: ['Tangem integration',
        'Open Finance',
        'Loans',
        'Staking',
        'Digital Assets Investments'
      ],
      stacks: ['Web3js', 'Solidity', 'JavaScript', 'Openzeppelin', 'Truffle']
    },
    {
      key: 3,
      name: 'quras',
      title: 'QURAS wallet',
      images: [
        '../../assets/img/case-quras-1.png',
        '../../assets/img/case-quras-2.png',
        '../../assets/img/case-quras-3.png'
      ],
      features: ['Private blockchain integrations', 'Cross-blockchain swap'],
      stacks: ['Web3js', 'Solidity', 'JavaScript', 'Openzeppelin', 'Truffle']
    },
    {
      key: 4,
      name: 'hex',
      title: 'HEX',
      images: [
        '../../assets/img/case-hex-1.png',
        '../../assets/img/case-hex-2.png',
        '../../assets/img/case-hex-3.png'
      ],
      features: ['QR', 'Smart Contract Integration'],
      stacks: ['Web3js', 'Solidity', 'JavaScript', 'Openzeppelin', 'Truffle']
    },
  ],
  [
    {
      key: 1,
      name: 'axion',
      title: 'Axion Dashboard',
      images: [
        '../../assets/img/case-axion-1.png',
        '../../assets/img/case-axion-2.png'
      ],
      features: ['Staking', 'Auction', 'H2T token swap', 'Uniswap auto-buy', 'Dashboard'],
      stacks: ['Solidity']
    },
    {
      key: 2,
      name: 'pion',
      title: 'Pion',
      images: [
        '../../assets/img/case-pion-1.png',
        '../../assets/img/case-pion-2.png'
      ],
      features: ['Multicomponent system', 'Stablecoin', 'Liquidity Pool Staking'],
      stacks: ['Solidity']
    },
    {
      key: 3,
      name: 'inflat',
      title: 'Inflationary Staking',
      images: [
        '../../assets/img/case-inflat-1.png',
        '../../assets/img/case-inflat-2.png',
        '../../assets/img/case-inflat-3.png'
      ],
      features: [],
      stacks: ['Solidity']
    },
    {
      key: 4,
      name: 'bitgear',
      title: 'Bitgear',
      images: [
        '../../assets/img/case-bitgear-1.png',
        '../../assets/img/case-bitgear-2.png'
      ],
      features: [
        '0x protocol integration',
        'all DEXs trading',
        'limit orders',
        'multiple wallets support'
      ],
      stacks: ['React', 'Web3', '0x protocol', 'Solidity']
    },
    {
      key: 5,
      name: 'minto',
      title: 'Minto',
      images: [
        '../../assets/img/case-minto-1.png',
        '../../assets/img/case-minto-2.png'
      ],
      features: [
        'HECO blockchain integration',
        'staking',
        'mining tokenization',
      ],
      stacks: ['React', 'Web3', 'Python', 'Solidity']
    },
    {
      key: 6,
      name: 'duc',
      title: 'Ducatus',
      images: [
        '../../assets/img/case-duc-1.png',
        '../../assets/img/case-duc-2.png'
      ],
      features: [
        'custom blockchains development',
        'explorer'
      ],
      stacks: ['Angular', 'React', 'Web3', 'Ionic', 'Cordova', 'Solidity']
    },
  ]
];

const tabs = ['web/mobile development', 'Smart contracts'];

const CaseStudies: FunctionalComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeBtn, setActiveBtn] = useState(1);
  const [activeImg, setActiveImg] = useState(1);

  const activeDropdown = dropdown[activeTab][activeBtn - 1];

  const handleClick = (index: number): void => {
    setActiveTab(index);
    setActiveBtn(1);
  };

  const setBtn = (index: number): void => {
    setActiveBtn(index);
    setActiveImg(1);
  }

  const switchLeft = (): void => {
    activeImg === 1 ? setActiveImg(activeDropdown.images.length) : setActiveImg(activeImg - 1);
  }

  const switchRight = (): void => {
    activeImg === activeDropdown.images.length ? setActiveImg(1) : setActiveImg(activeImg + 1);
  }

  return (
    <div className={`${style['case-studies']} ${style.container}`} id="cases">
      <BlockHeader style={style} primary="Case Studies" />
      <div className={style['case-studies__tabs']}>
        <div className={`${style['tabs__tablinks']} ${style.tablinks}`}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${style['case-studies__tablinks__link']} ${style['tablinks__link']} ${index === activeTab ? style['link-active'] : null}`}
              onClick={(): void => handleClick(index)}
            >{tab}</button>
          ))}
        </div>
        <div className={style.scroll}>
          <div id="case-studies__firs-tab" className={style['case-studies__content']}>
            {content[activeTab].map((item) => (
              // eslint-disable-next-line react/jsx-key
              <CaseStudiesContent
                style={style}
                source={item.source}
                alt={item.alt}
                name={item.name}
                number={item.number}
                activeBtn={activeBtn}
                setBtn={setBtn}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${style['case-studies__dropdown']} ${style.dropdown}`}
        key={activeDropdown.key}
      >
        <h3 className={style['dropdown__title']}>{activeDropdown.title}</h3>
        <div className={style['dropdown__img']}>
          {activeTab === 0 ? (
            <div>
              <div className={style.scroll}>
                {activeDropdown.images.map((img, i) => (
                  <img
                    key={i}
                    className={style.scroll__dev}
                    src={img}
                    alt={`case ${activeDropdown.name} 1`}
                  />
                ))}
              </div>
              <div className={style.noscroll}>
                {activeDropdown.images.map((img, i) => (
                  <img
                    key={i}
                    className={style.scroll__dev}
                    src={img}
                    alt={`case ${activeDropdown.name} 1`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className={style.switch}>
                <button className={style.switchIcon} onClick={(): void => switchLeft()}>
                  <img src={'../../assets/img/icons/icon-switch-left.svg'} alt="switch left icon" />
                </button>
                <img
                  className={style.switchImage}
                  src={`../../assets/img/case-${activeDropdown.name}-${activeImg}.png`}
                  alt={`${activeDropdown.name} ${activeImg}`}
                />
                <button className={style.switchIcon} onClick={(): void => switchRight()}>
                  <img src={'../../assets/img/icons/icon-switch-right.svg'} alt="switch right icon" />
                </button>
              </div>
              <div className={style.scroll}>
                {activeDropdown.images.map((img, i) => (
                  <img
                    key={i}
                    className={style.scroll__contract}
                    src={img}
                    alt={`${activeDropdown.name} ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className={style['dropdown__insights']}>
          <div className={`${style['dropdown__insights-insight']} ${style['insight-features']}`}>
            <h5 className={style['insight__title']}>Features:</h5>
            <ul className={style['gray-list']}>
              {activeDropdown.features.map(feature => (
                <li className={`${style['features__item']} ${style['gray-list__item']}`} key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className={`${style['dropdown__insights-insight']} ${style['insight-stacks']}`}>
            <h5 className={style['insight__title']}>Stacks:</h5>
            <ul className={style['gray-list']}>
              {activeDropdown.stacks.map(stack => (
                <li className={`${style['features__item']} ${style['gray-list__item']}`} key={stack}>{stack}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies;