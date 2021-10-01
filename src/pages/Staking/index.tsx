import {FunctionalComponent, h} from "preact";
import StakingBlock from "../../components/staking-block";
import StakingCards from "../../components/staking-cards";
import style from "../../components/staking-block/style.scss";
import StakingCallToAction from "../../components/staking-call-to-action";
import StakingNumbersCards from "../../components/staking-numbers-cards";
import OtherSites from "../../components/other-sites";
import ContactUs from "../../components/contact-us";
import {useState} from "preact/hooks";
import UpButton from "../../components/up-button";
import TelegramWidget from "../../components/telegram-widget";

const StakingPage: FunctionalComponent = () => {
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
        <div className={style.staking}>
            <TelegramWidget />
            <StakingBlock />
            <StakingCards />
            <StakingCallToAction />
            <StakingNumbersCards />
            <OtherSites />
            {isActive ? <UpButton /> : null}
            <ContactUs title={'Get live technical demo'} />


        </div>
    );
};

export default StakingPage;