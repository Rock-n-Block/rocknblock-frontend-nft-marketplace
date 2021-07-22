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

  // Start of LiveChat (www.livechatinc.com) code
  if (typeof window !== "undefined") {
    window.__lc = window.__lc || {};
    window.__lc.license = 9683030;
    (function (n, t, c) {
      const e = {
        _q: [], _h: null, _v: "2.0", on: function () {
          i(["on", c.call(arguments)])
        }, once: function () {
          i(["once", c.call(arguments)])
        }, off: function () {
          i(["off", c.call(arguments)])
        }, get: function () {
          if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
          return i(["get", c.call(arguments)])
        }, call: function () {
          i(["call", c.call(arguments)])
        }, init: function () {
          const n = t.createElement("script");
          n.async = !0, n.type = "text/javascript", n.src = "https://cdn.livechatinc.com/tracking.js", t.head.appendChild(n)
        }
      };

      function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n)
      }

      !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e
    }(window, document, [].slice))
  }

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
