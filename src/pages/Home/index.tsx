import {Fragment, FunctionalComponent, h} from 'preact';
import {
    ContactUs,
    UpButton
} from "../../components";
import TelegramWidget from "../../components/telegram-widget";
import {useState} from "preact/hooks";
import style from './style.module.scss';
import NftMarketplace from './nftMarketplace';
import WhatIsAn from './whatIsAn';
import Features from './features';
import Standarts from './standarts';
import OrderDevelopment from './orderDevelopment';
import Working from './working';
import Choose from './choose';
import Portfolio from './portfolio';
import CustomeFooter from './customeFooter';
import HomePageSites from './HomePageSites/HomePageSites';


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
    }

    return (
        <Fragment>
            <TelegramWidget />
            {isActive ? <UpButton /> : null}
            <div class={style.container}>
                <NftMarketplace />
                <Portfolio />
                <WhatIsAn />
                <Features />
                <Standarts />
                <OrderDevelopment />
                <Working />
                <Choose />
                <HomePageSites />
                <ContactUs title={'GET LIVE TECHNICAL DEMO'} />
                <CustomeFooter />
            </div>
        </Fragment>
    )
};

export default HomePage;
