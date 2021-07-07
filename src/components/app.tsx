import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';

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
import UpButton from './up-button';

const App: FunctionalComponent = () => {
  const [isActive, setIsActive] = useState(false);

  if (typeof window !== 'undefined') window.onscroll = (): void => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div id="preact_root">
      <Header />
      <About />
      {isActive ? <UpButton /> : null}
      <WhyUs />
      <AreasOfExpertise />
      <WhatWeDoBest />
      <CaseStudies />
      <Team />
      <OurPartners />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
