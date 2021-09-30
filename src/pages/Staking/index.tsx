import {FunctionalComponent, h} from "preact";
import StakingBlock from "../../components/staking-block";
import StakingCards from "../../components/staking-cards";
import style from "../../components/staking-block/style.scss";

const StakingPage: FunctionalComponent = () => {
    return (
        <div className={`${style.staking} ${style.container}`}>
            <StakingBlock />
            <StakingCards />
        </div>
    );
};

export default StakingPage;