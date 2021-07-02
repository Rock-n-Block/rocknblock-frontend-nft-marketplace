import {FunctionalComponent, h} from 'preact';
import BlockHeader from '../block-header';

import style from './style.scss';

const stacks = {
  backend: [
    'Python',
    'Solidity',
    'JavaScript',
    'C',
    'OpenZeppelin',
    'GSN',
    'NPM',
    'Docker Hub',
    'Gunicorn',
    'Supervisord',
    'PyPi',
    'USWSGI',
    'PostgreSQL',
    'MongoDB'
  ],
  blockchain: [
    'Solidity',
    'OpenZeppelin',
    'Truffle',
    'npm',
    'C++',
    'web3'
  ],
  frontend: [
    'Express',
    'Apollo',
    'TypeScript',
    'GraphQL',
    'Angular',
    'Vue',
    'JS',
    'MobX',
    'NodeJS',
    'Vuex',
    'iOS Developing (Swiftui)',
    'web3'
  ]
};

const overview = [
  {
    number: 16,
    primary: 'Backend team',
    secondary: '16 developers'
  },
  {
    number: 13,
    primary: 'Frontend team',
    secondary: '12 developers'
  },
  {
    number: 10,
    primary: 'Smart Contracts team',
    secondary: '6 developers'
  },
  {
    number: 7,
    primary: 'Project managers',
    secondary: ''
  },
  {
    number: 3,
    primary: 'Designers',
    secondary: ''
  },
  {
    number: 2,
    primary: 'Analytics',
    secondary: ''
  }
];

const handleClick = (event: any, tabIndex: string) => {
  // Get all elements with class="tabcontent" and hide them
  const tabcontent = document.getElementsByClassName("team__tabs__content");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  const tablinks = document.getElementsByClassName("team__tablinks__link");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" link-active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  document.getElementById(`team__${tabIndex}-tab`).style.display = "flex";
  event.currentTarget.className += " link-active";
}

const Team: FunctionalComponent = () => {
  return (
    <div className={`${style.team} ${style.container}`} id="team">
      <div className={style['background-img']}>
        <img src="../../assets/img/background-team.png" alt="background-img" />
      </div>
      <BlockHeader
        style={style}
        primary="Team"
        secondary="A team of highly qualified specialists:"
      />
      <div className={style.team__tabs}>
        <div className={`${style.tabs__tablinks} ${style.tablinks}`}>
          <div
            className={`${style.team__tablinks__link} ${style.tablinks__link} ${style['link-active']}`}
            id="team__development-tab__button"
            //onClick={() => handleClick(event, "development")}
          >Development
          </div>
          {/*<button*/}
          {/*  className={`${style.team__tablinks__link} ${style.tablinks__link}`}*/}
          {/*  type="button"*/}
          {/*  id="team__management-tab__button"*/}
          {/*  onClick={() => handleClick(event, "management")}*/}
          {/*>Management*/}
          {/*</button>*/}
        </div>
        <div id="team__development-tab" className={style.team__content}>
          <div className={style.content__card}>
            <h3 className={style.content__card__post}>Backend Team Lead</h3>
            <h4 className={style.content__card__name}>Maksim Strenk</h4>
            <p className={style.content__card__description}>Development experience 6 years, in blockchain 4 years</p>
            <div className={style.content__card__exp}>
              <h5 className={style.content__card__exp__title}>Completed projects</h5>
              <ul className={style.content__card__exp__list}>
                <li className={style.content__card__exp__list__item}>MyWish Backend (4 years)</li>
                <li className={style.content__card__exp__list__item}>Implementation of UTREEXO and HTLC for the Bitcoin
                  network
                </li>
                <li className={style.content__card__exp__list__item}>Made the current Ducatus Exchange</li>
                <li className={style.content__card__exp__list__item}>Experienced in deploying and syncing Ethereum and Bitcoin
                  full nodes
                </li>
              </ul>
              <div className={style.content__card__exp__stacks}>
                <h5 className={style.stacks__title}>Stacks:</h5>
                <ul className={style['gray-list']}>
                  {stacks.backend.map(stack => (
                    <li className={`${style['stacks__item']} ${style['gray-list__item']}`} key={stack}>{stack}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={style.content__card}>
            <h3 className={style.content__card__post}>Blockchain Team Lead</h3>
            <h4 className={style.content__card__name}>Nikita Tepelin</h4>
            <div className={style.content__card__exp}>
              <h5 className={style.content__card__exp__title}>Experience:</h5>
              <ul className={style.content__card__exp__list}>
                <li className={style.content__card__exp__list__item}>smart contract development collaterized stable coin</li>
                <li className={style.content__card__exp__list__item}>developed by ZK proof anonymizer</li>
                <li className={style.content__card__exp__list__item}>development of OTC exchange</li>
                <li className={style.content__card__exp__list__item}>yeild-farming / staking contracts development</li>
              </ul>
              <div className={style.content__card__exp__stacks}>
                <h5 className={style.stacks__card__exp__stacks}>Stacks:</h5>
                <ul className={style['gray-list']}>
                  {stacks.blockchain.map(stack => (
                    <li className={`${style.stacks__item} ${style['gray-list__item']}`} key={stack}>{stack}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={style.content__card}>
            <h3 className={style.content__card__post}>Frontend Team Lead</h3>
            <h4 className={style.content__card__name}>Nikita Sireishikov</h4>
            <div className={style.content__card__exp}>
              <h5 className={style.content__card__exp__title}>Experience:</h5>
              <ul className={style.content__card__exp__list}>
                <li className={style.content__card__exp__list__item}>manual compilation of transactions to send for Bitcoin and Ethereum networks on node.js</li>
                <li className={style.content__card__exp__list__item}>development of nodes for interacting with the blockchain on node.js</li>
                <li className={style.content__card__exp__list__item}>development of web-wallets in Angular</li>
                <li className={style.content__card__exp__list__item}>development of a frontend for interacting with smart contracts through the backend</li>
                <li className={style.content__card__exp__list__item}>Axion Dashboard front-end development for interacting with smart contracts directly (web3j and web3js) - Axion</li>
              </ul>
              <div className={style.content__card__exp__stacks}>
                <h5 className={style.stacks__card__exp__stacks}>Stacks:</h5>
                <ul className={style['gray-list']}>
                  {stacks.frontend.map(stack => (
                    <li className={`${style.stacks__item} ${style['gray-list__item']}`} key={stack}>{stack}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className={style.team__overview}>
        {overview.map(item => (
          <li className={style.team__overview__item} key={item.primary}>
            <div className={style.team__overview__item__number}>{item.number}</div>
            <div className={`${style['team__overview__item__primary-text']} ${style.text}`}>{item.primary}</div>
            <div className={`${style['team__overview__item__secondary-text']} ${style.text}`}>{item.secondary}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Team;