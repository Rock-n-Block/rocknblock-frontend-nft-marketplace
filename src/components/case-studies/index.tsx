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
      images: 3,
      features: ['Blockchain developement', 'Mobile wallet application development', 'Crowdfunding platform', 'Online stores with crypto support'],
      stacks: ['Web3js', 'Solidity', 'JavaScript', 'Openzeppelin', 'Truffle']
    },
    {
      key: 2,
      name: 'census',
      title: 'Census Wallet',
      images: 3,
      features: ['Tangem integration', 'Open Finance', 'Loans', 'Staking', 'Digital Assets Investments'],
      stacks: ['Web3js', 'Solidity', 'JavaScript', 'Openzeppelin', 'Truffle']
    },
    {
      key: 3,
      name: 'quras',
      title: 'QURAS wallet',
      images: 3,
      features: ['Private blockchain integrations', 'Cross-blockchain swap'],
      stacks: ['Web3js', 'Solidity', 'JavaScript', 'Openzeppelin', 'Truffle']
    },
    {
      key: 4,
      name: 'hex',
      title: 'HEX',
      images: 3,
      features: ['QR', 'Smart Contract Integration'],
      stacks: ['Web3js', 'Solidity', 'JavaScript', 'Openzeppelin', 'Truffle']
    },
  ],
  [
    {
      key: 1,
      name: 'axion',
      title: 'Axion Dashboard',
      images: 2,
      features: ['Staking', 'Auction', 'H2T token swap', 'Uniswap auto-buy', 'Dashboard'],
      stacks: []
    },
    {
      key: 2,
      name: 'pion',
      title: 'Pion',
      images: 2,
      features: ['Multicomponent system', 'Stablecoin', 'Liquidity Pool Staking'],
      stacks: []
    },
    {
      key: 3,
      name: 'inflat',
      title: 'Inflationary Staking',
      images: 3,
      features: [],
      stacks: []
    },
    {
      key: 4,
      name: 'bitgear',
      title: 'Bitgear',
      images: 2,
      features: [],
      stacks: []
    },
    {
      key: 5,
      name: 'minto',
      title: 'Minto',
      images: 2,
      features: [],
      stacks: []
    },
    {
      key: 6,
      name: 'duc',
      title: 'Ducatus',
      images: 2,
      features: [],
      stacks: []
    },
  ]
];

const tabs = ['Smart contracts', 'web/mobile development'];

const CaseStudies: FunctionalComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeBtn, setActiveBtn] = useState(1);
  const [activeImg, setActiveImg] = useState(1);

  const activeDropdown = dropdown[activeTab][activeBtn - 1];

  const handleClick = (index: number) => {
    setActiveTab(index);
    setActiveBtn(1);
  };

  const setBtn = (index: number) => {
    setActiveBtn(index);
    setActiveImg(1);
  }

  const switchLeft = () => {
    activeImg === 1 ? setActiveImg(activeDropdown.images) : setActiveImg(activeImg - 1);
  }

  const switchRight = () => {
    activeImg === activeDropdown.images ? setActiveImg(1) : setActiveImg(activeImg + 1);
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
              onClick={() => handleClick(index)}
            >{tab}</button>
          ))}
        </div>
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
      <div
        className={`${style['case-studies__dropdown']} ${style.dropdown}`}
        key={activeDropdown.key}
      >
        <h3 className={style['dropdown__title']}>{activeDropdown.title}</h3>
        <div className={style['dropdown__img']}>
          {activeTab === 0 ? (
            <div>
              <img src={`../../assets/img/case-${activeDropdown.name}-1.png`} alt={`case ${activeDropdown.name} 1`} />
              <img src={`../../assets/img/case-${activeDropdown.name}-2.png`} alt={`case ${activeDropdown.name} 2`} />
              <img src={`../../assets/img/case-${activeDropdown.name}-3.png`} alt={`case ${activeDropdown.name} 3`} />
            </div>
          ) : (
            <div className={style.switch}>
              <button className={style.switchIcon} onClick={() => switchLeft()}>
                <img src={'../../assets/img/icons/icon-switch-left.svg'} alt="switch left icon" />
              </button>
              <img
                className={style.switchImage}
                src={`../../assets/img/case-${activeDropdown.name}-${activeImg}.png`}
                alt={`${activeDropdown.name} ${activeImg}`}
              />
              <button className={style.switchIcon} onClick={() => switchRight()}>
                <img src={'../../assets/img/icons/icon-switch-right.svg'} alt="switch right icon" />
              </button>
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