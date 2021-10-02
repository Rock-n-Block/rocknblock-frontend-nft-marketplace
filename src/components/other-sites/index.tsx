import {FunctionalComponent, h} from "preact";
import style from "../staking-about/style.scss";

const OtherSites: FunctionalComponent = () => {
    return (
        <div className={`${style['staking__sites']} ${style.w1000px}`}>
            <h2 className={style['staking__sites_title']}>Head</h2>
            <div className={style['staking__sites_container']}>
                <div className={style['staking__sites_container_item']}>
                    <div className={style['staking__sites_container_item_img']}>
                        <picture>
                            <source srcSet="../../assets/img/icon-farming.webp" type="image/webp" />
                            <img src='../../assets/img/icon-farming.png' alt='icon farming' />
                        </picture>
                        <div />
                    </div>


                    <h3>Farming</h3>
                    <a
                        className={`${style['staking__buttons-order']} ${style.btn} ${style['btn-white']} ${style['btn-rounded']}`}
                    >
                        Click here
                        <img src="../../assets/img/icons/icon-arrow-right-mask.svg" alt="arrow-right" />
                    </a>
                </div>
                <div className={style['staking__sites_container_item']}>
                    <div className={style['staking__sites_container_item_img']}>
                        <picture>
                            <source srcSet="../../assets/img/icon-nft.webp" type="image/webp" />
                            <img src='../../assets/img/icon-nft.png' alt='icon nft' />
                        </picture>
                        <div />
                    </div>
                    <h3>Nft marketplace</h3>
                    <a
                        className={`${style['staking__buttons-order']} ${style.btn} ${style['btn-white']} ${style['btn-rounded']}`}
                    >
                        Click here
                        <img src="../../assets/img/icons/icon-arrow-right-mask.svg" alt="arrow-right" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OtherSites;