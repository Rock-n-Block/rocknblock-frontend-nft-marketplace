import {FunctionalComponent, h} from "preact";
import StakingAbout from "../../components/staking-about";
import StakingCards from "../../components/staking-cards";
import style from "../../components/staking-about/style.scss";
import StakingCallToAction from "../../components/staking-call-to-action";
import StakingNumbersCards from "../../components/staking-numbers-cards";
import OtherSites from "../../components/other-sites";
import ContactUs from "../../components/contact-us";

const StakingPage: FunctionalComponent = () => {

    return (
        <div className={style.staking}>
            <StakingAbout />
            <StakingCards />
            <StakingCallToAction />
            <StakingNumbersCards />
            <OtherSites />
            <ContactUs title={'GET LIVE TECHNICAL DEMO'} />


        </div>
    );
};

export default StakingPage;