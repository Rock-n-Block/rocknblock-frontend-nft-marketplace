import { FunctionalComponent, h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';
import HomePage from '../pages/Home';
import ThanksPage from '../pages/Thanks';
import PrivacyPolicyPage from '../pages/PrivacyPolicy';
import TermsPage from "../pages/Terms";

const App: FunctionalComponent = () => (
  <div id="preact_root">
    <Header />
    <Router>
      <HomePage path='/' />
      <ThanksPage path='/calendly' />
      <PrivacyPolicyPage path='/privacy-policy' />
      <TermsPage path='/terms-of-service' />
    </Router>
    <Footer />
  </div>
);

export default App;
