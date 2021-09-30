import {Fragment, FunctionalComponent, h} from "preact";
import style from "./style.scss";

const StakingBlock: FunctionalComponent = () => {
    return (
        <Fragment>
            <div className={`${style['staking__container_block_1']}`}>
                <div>
                    <h1>Staking Platform Development</h1>
                    <h2>One-stop to building an exclusive staking solution</h2>
                    <section className={style['staking__buttons']}>
                        <a
                            className={`${style['staking__buttons-order']} ${style.btn} ${style['btn-orange-cl-solid']} ${style['btn-rounded']}`}
                        >
                            ORDER STAKING
                            <img src="../../assets/img/icons/icon-arrow-right-mask.svg" alt="arrow-right" />
                        </a>
                    </section>
                </div>
                <picture>
                    <source srcSet="../../assets/img/staking-coins.webp" type="image/webp" />
                    <img src='../../assets/img/staking-coins.png' alt='staking coins' />
                </picture>
            </div>
            <div className={`${style['staking__container_block_2']}`}>
                <picture>
                    <source srcSet="../../assets/img/staking-tablet.webp" type="image/webp" />
                    <img src='../../assets/img/staking-tablet.png' alt='staking tablet' />
                </picture>
                <h2>Help your users unlock the rewards of staking by developing your staking platform. Though
                    Ethereum is the top network, the DeFi staking platform can be built on any blockchain network as
                    requested by the client.</h2>
            </div>
        </Fragment>
    );
};

export default StakingBlock;