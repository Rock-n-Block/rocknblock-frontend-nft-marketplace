import {FunctionalComponent, h} from "preact";
import StakingAbout from "../../components/staking-about";
import StakingCards from "../../components/staking-cards";
import style from "../../components/staking-about/style.scss";
import StakingCallToAction from "../../components/staking-call-to-action";
import StakingNumbersCards from "../../components/staking-numbers-cards";
import OtherSites from "../../components/other-sites";
import ContactUs from "../../components/contact-us";
import TelegramWidget from "../../components/telegram-widget";
import UpButton from "../../components/up-button";
import {useState} from "preact/hooks";

const StakingPage: FunctionalComponent = () => {
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
        <div className={style.staking}>
            <TelegramWidget />
            <StakingAbout />
            <StakingCards />
            <StakingCallToAction />
            <StakingNumbersCards />
            {isActive ? <UpButton /> : null}
            <OtherSites />
            <ContactUs title={'GET LIVE TECHNICAL DEMO'} />
        </div>
    );
};

export default StakingPage;