import {FunctionalComponent, h} from "preact";
import style from './style.scss';
import {cardsColumns, cardsTitles, nftItems} from "./mock";

const NftGenerator: FunctionalComponent = () => {
    return (
        <div className={style['nft-generator']}>
            <h2 className={style['nft-generator__title']}>take the leap towards your NFT business.</h2>
            <a
                href="#contact-us"
                className={`${style['about__buttons-contact']} ${style.btn} ${style['btn-orange-cl-solid']} ${style['btn-rounded']}`}>
                Enroll now
                <img
                    src="../../assets/img/icons/icon-arrow-right-mask.svg"
                    alt="arrow-right"
                />
            </a>

            <div className={style['nft-generator__container']}>
                <div className={style['nft-generator__container_titles']}>
                    {cardsTitles.map((item, index: number) =>
                        <div key={`${item.title}_${index}`} className={style['nft-generator__container_titles_item']}>{item.title}</div>
                    )}
                </div>

                <div className={style['nft-generator__container_cards']}>
                    <div className={style['nft-generator__container_cards_column']}>
                        {cardsColumns.map((item, index: number) =>
                            <div key={`${item.title}__${index}`} className={style['nft-generator__container_cards_column_item']}>
                                {item.title}
                            </div>
                        )}
                    </div>

                    <div className={style['nft-generator__container_cards_row']}>
                        {nftItems.map(item =>
                            <div key={`${item.imgNumber}_`} className={style['nft-generator__container_cards_row_item']}>
                                <h2>{item.number}</h2>
                                <img src={`../../assets/img/10knft/10knft-avatar-${item.imgNumber}.svg`} alt={item.alt} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NftGenerator;