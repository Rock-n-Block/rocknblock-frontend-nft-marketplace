import {FunctionalComponent, h} from 'preact';
import BlockHeader from '../block-header';

import style from './style.scss';
import {useState} from "preact/hooks";

const team = {
  dev: [
    {
      post: 'Backend Team Lead',
      name: 'Maksim Strenk',
      text: '6 years development experience and 4 years experience in blockchain',
      skillTitle: 'Completed projects:',
      skills: [
        'MyWish Backend (4 years)',
        'Implementation of UTREEXO and HTLC for the Bitcoin network',
        'Made the current Ducatus Exchange',
        'Experienced in deploying and syncing Ethereum and Bitcoin full nodes'
      ],
      stacks: [
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
      ]
    },
    {
      post: 'Blockchain Team Lead',
      name: 'Nikita Tepelin',
      text: '',
      skillTitle: 'Experience:',
      skills: [
        'smart contract development collaterized stable coin',
        'Anonymizer powered by ZK proof',
        'development of OTC exchange',
        'yeild-farming / staking contracts development'
      ],
      stacks: [
        'Solidity',
        'OpenZeppelin',
        'Truffle',
        'npm',
        'C++',
        'web3'
      ]
    },
    {
      post: 'Frontend Team Lead',
      name: 'Nikita Sireishikov',
      text: '',
      skillTitle: 'Experience:',
      skills: [
        'manual compilation of transactions to send for Bitcoin and Ethereum networks on node.js',
        'development of nodes for interacting with the blockchain on node.js',
        'development of web-wallets in Angular',
        'frontend development for interacting with smart contracts through the backend',
        'Axion Dashboard frontend development for interacting with smart contracts directly (web3j and web3js) - Axion'
      ],
      stacks: [
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
    },
  ],
  mng: [
    {
      img: '../../assets/img/team-mng-1.png',
      name: 'Dmitry Ershov',
      post: 'CEO'
    },
    {
      img: '../../assets/img/team-mng-2.png',
      name: 'Alex Tkachev',
      post: 'CBDO'
    },
    {
      img: '../../assets/img/team-mng-3.png',
      name: 'Olya Kulakova',
      post: 'CMO'
    },
  ]
};

const overview = [
  {
    number: 23,
    primary: 'Backend team',
  },
  {
    number: 27,
    primary: 'Frontend team',
  },
  {
    number: 19,
    primary: 'Smart Contracts team',
  },
  {
    number: 13,
    primary: 'Project managers',
  },
  {
    number: 5,
    primary: 'Designers',
  },
  {
    number: 3,
    primary: 'Analytics',
  }
];

const tabs = ['Development', 'Management'];

const Team: FunctionalComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: number): void => {
    setActiveTab(index);
  }

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
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`${style.team__tablinks__link} ${style.tablinks__link} ${activeTab === index ? style['link-active'] : null}`}
              onClick={(): void => handleClick(index)}
            >{tab}</button>
          ))}
        </div>
        <div className={style.scroll}>
          <div id="team__development-tab" className={style.team__content}>
            {activeTab === 0 ? team.dev.map((item: any) => (
              <div key={item.name} className={style.content__card}>
                <h3 className={style.content__card__post}>{item.post}</h3>
                <h4 className={style.content__card__name}>{item.name}</h4>
                <p className={style.content__card__description}>{item.text}</p>
                <div className={style.content__card__exp}>
                  <h5 className={style.content__card__exp__title}>{item.skillTitle}</h5>
                  <ul className={style.content__card__exp__list}>
                    {item.skills.map((skill: string) => (
                      <li key={skill} className={style.content__card__exp__list__item}>{skill}</li>
                    ))}
                  </ul>
                  <div className={style.content__card__exp__stacks}>
                    <h5 className={style.stacks__title}>Stacks:</h5>
                    <ul className={style['gray-list']}>
                      {item.stacks.map((stack: string) => (
                        <li className={`${style['stacks__item']} ${style['gray-list__item']}`}
                            key={stack}>{stack}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )) : team.mng.map((item: any) => (
              <div key={item.name} className={style.content__card__mng}>
                <img src={item.img} alt="image of manager" />
                <div className={style.description}>
                  <div className={style.description__name}>{item.name}</div>
                  <div className={style.description__post}>{item.post}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul className={style.team__overview}>
        {overview.map(item => (
          <li className={style.team__overview__item} key={item.primary}>
            <div className={style.team__overview__item__number}>{item.number}</div>
            <div className={`${style['team__overview__item__primary-text']} ${style.text}`}>{item.primary}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Team;