import {FunctionalComponent, h} from 'preact';

import style from './style.scss';

const info = [
  {
    title: 'Beneficiary',
    text: 'MANZONI LIMITED LIABILITY COMPANY'
  },
  {
    title: 'Beneficiary account',
    text: '40702840410000002761'
  },
  {
    title: 'KPP number',
    text: '781301001'
  },
  {
    title: 'OGRN',
    text: '1167847119901'
  },
  {
    title: 'Tax payer number',
    text: '7813245218'
  },
  {
    title: 'Registered address',
    text: '190031, RUSSIA, ST.PETERSBURG, Gorokhovaya street, 47'
  }
];

const contacts = [
  {
    name: 'mail',
    content: 'hello@rocknblock.io'
  },
  {
    name: 'phone',
    content: '+7 (812) 429-74-34'
  }
];

const Company: FunctionalComponent = () => (
  <div className={style.container}>
    <div className={style.logo}>
      <img src="../../assets/img/background-about-2.png" alt="bg img" className={style.bg__1} />
      <a href="/">
        <img src="../../assets/img/icons/logo.svg" alt="R'n'B logo" />
      </a>
    </div>
    <img className={style.bg__2} src="../../assets/img/background-about-3.png" alt="bg img" />
    <div className={style.blocks}>
      <div className={style.company}>
        <h2>Rock'n'Block</h2>
        <div className={style.company__info}>
          {info.map(item => (
            <div key={item.title} className={style.company__info__item}>
              <div className={style.company__info__item__title}>{item.title}</div>
              <img src="../../assets/img/line-orange.svg" alt="orange line" />
              <div className={style.company__info__item__text}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.contacts}>
        <h2>Contacts</h2>
        <div className={style.contacts__info}>
          {contacts.map(item => (
            <div key={item.name} className={style.contacts__info__item}>
              <div className={style.contacts__info__item__img}>
                <img src={`../../assets/img/icons/icon-footer-${item.name}-mask.svg`} alt={`${item.name} icon`} />
              </div>
              <div className={style.contacts__info__item__content}>{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <img className={style.bg__3} src="../../assets/img/background-partners.png" alt="bg img" />
  </div>
)

export default Company;
