import {FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';
import * as smoothscroll from 'smoothscroll-polyfill';

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
import PopUp from '../../components/pop-up';

const HomePage: FunctionalComponent = () => {
  const [isActive, setIsActive] = useState(false);

  if (typeof window !== 'undefined') {
    window.onscroll = (): void => {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }

    smoothscroll.polyfill();
  }

  return (
    <div>
      <PopUp />
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
    </div>
  )
}

export default HomePage;
