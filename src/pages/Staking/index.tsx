import {FunctionalComponent, h} from "preact";
import style from "../../components/staking-about/style.scss";
import {useState} from "preact/hooks";
import {
    ContactUs,
    OtherSites,
    StakingAbout,
    StakingCallToAction,
    StakingCards,
    StakingNumbersCards,
    TelegramWidget,
    UpButton
} from "../../components";

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