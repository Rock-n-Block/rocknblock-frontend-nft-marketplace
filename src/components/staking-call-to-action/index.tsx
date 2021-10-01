import {Fragment, FunctionalComponent, h} from "preact";
import style from "../staking-block/style.scss";

const StakingCallToAction: FunctionalComponent = () => {
    return (
        <Fragment>
            <div className={style['staking__call-to-action']}>
                <div className={style['staking__call-to-action_text']}>
                    <h2>Build your staking platform with Rock’n’Block</h2>
                    <h3>Rock'n'Block offers a proven staking engine with which you can run automated staking operations
                        and profit. Using experience in developing staking platforms and advances in blockchain, it also
                        aims to provide simple and professional staking services.</h3>
                </div>
                <div className={style['staking__call-to-action_picture']}>
                    <picture>
                        <source srcSet="../../assets/img/rock-n-block-img.webp" type="image/webp" />
                        <img className={style['staking__call-to-action_picture_bg']} src='../../assets/img/rock-n-block-img.png' alt='Rock n Block staking platform' />
                    </picture>
                </div>
            </div>
            <div className={style['staking__banner']}>
                <div className={style['staking__banner_container']}>
                    <p>Connect with our staking development experts today and launch your staking product in a hassle-free manner.</p>
                    <a
                        className={`${style['staking__buttons-order']} ${style.btn} ${style['btn-white']} ${style['btn-rounded']} ${style['btn-brd-3px']}`}
                    >
                        Get a quote
                        <img src="../../assets/img/icons/icon-arrow-right-mask.svg" alt="arrow-right" />
                    </a>
                </div>

            </div>
        </Fragment>
    );
};

export default StakingCallToAction;