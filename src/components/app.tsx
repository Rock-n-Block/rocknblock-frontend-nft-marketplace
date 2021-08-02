import { FunctionalComponent, h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';
import HomePage from '../pages/Home';
import ThanksPage from '../pages/Thanks';
import PrivacyPolicyPage from '../pages/PrivacyPolicy';
import TermsPage from '../pages/Terms';
import CompanyPage from '../pages/Company';

// const hashChange = (): void => {
//   if (location.hash) {
//     const hash = location.hash.replace(/#/, '');
//     history.replaceState({}, '', hash);
//   }
// }

const App: FunctionalComponent = () => {
  //if (typeof window !== "undefined") window.onhashchange = hashChange;

  return (
  <div id="preact_root">
    <Header />
    <Router>
      <HomePage path='/' />
      <ThanksPage path='/calendly' />
      <PrivacyPolicyPage path='/privacy-policy' />
      <TermsPage path='/terms-of-service' />
      <CompanyPage path='/company' />
    </Router>
    <Footer />
  </div>
)};

export default App;
