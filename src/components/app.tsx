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
//import UpButton from './up-button';

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
      {/*<UpButton />*/}
    </div>
  );
};

export default App;
