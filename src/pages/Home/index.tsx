import {FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';

import About from '../../components/about';
import WhyUs from '../../components/why-us';
import AreasOfExpertise from '../../components/areas-of-expertise';
import WhatWeDoBest from '../../components/what-we-do-best';
import CaseStudies from '../../components/case-studies';
import Team from '../../components/team';
import OurPartners from '../../components/our-partners';
import ContactUs from '../../components/contact-us';
import UpButton from '../../components/up-button';
import TelegramWidget from '../../components/telegram-widget';
// import PopUp from '../../components/pop-up';

// let isPopupClosed: string;

const HomePage: FunctionalComponent = () => {
  const [isActive, setIsActive] = useState(false);

  if (typeof window !== 'undefined') {
    // const item = window.sessionStorage.getItem('isPopupClosed');
    // if (!item) {
    //   window.sessionStorage.setItem('isPopupClosed', 'no')
    // } else {
    //   isPopupClosed = item;
    // }

    window.onscroll = (): void => {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }

  return (
    <div>
      <TelegramWidget />
      <About />
      {isActive ? <UpButton /> : null}
      <WhyUs />
      <AreasOfExpertise />
      <WhatWeDoBest />
      <CaseStudies />
      <Team />
      <OurPartners />
      <ContactUs />
      {/*{isPopupClosed === 'yes' ? null : <PopUp />}*/}
    </div>
  )
}

export default HomePage;
