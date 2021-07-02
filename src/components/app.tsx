import {FunctionalComponent, h} from 'preact';

import About from './about';
import Header from './header';
import WhyUs from './why-us';
import AreasOfExpertise from './areas-of-expertise';
import WhatWeDoBest from './what-we-do-best';
import CaseStudies from './case-studies';
import Team from './team';
import OurPartners from './our-partners';
import ContactUs from './contact-us';
import Footer from './footer';

import style from '../style/index.scss';

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Header />
      <About />
      <WhyUs />
      <AreasOfExpertise />
      <WhatWeDoBest />
      <CaseStudies />
      <Team />
      <OurPartners />
      <ContactUs />
      <Footer />
      <a href="#" className={`${style.icon} ${style['icon-arrow-top']} ${style['arrow-top']}`}>
        <img src="../assets/img/icons/icon-arrow-top-mask.svg" alt="arrow top" />
      </a>
    </div>
  );
};

export default App;
