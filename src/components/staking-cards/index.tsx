import {FunctionalComponent, h} from "preact";
import style from "../staking-about/style.scss";
import {CardItem, cards} from "../../assets/data/stakingCards";

const StakingCards: FunctionalComponent = () => {
    return (
        <div className={`${style['staking__container_info']} ${style.w1000px}`}>
            <div className={`${style['staking__container_info_head']}`}>
                <p className={style['staking__container_info_head_title']}>Unlimited ways to earn rewards for users</p>
                <div className={`${style['staking__container_info_head_block']}`}>
                    {cards.item1.map((item: CardItem, index: number) =>
                        <div className={`${style['staking__container_info_head_block_card']}`} key={`_${index}_card`}>
                            <img src={item.source} alt={item.alt} />
                            <div className={`${style['staking__container_info_head_block_card_text-container']}`}>
                                <h2>{item.title}</h2>
                                <h3>{item.desc}</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className={`${style['staking__container_info_head']}`}>
                <h2 className={style['staking__container_info_head_title']}>Staking Development Flow</h2>
                <h3 className={style['staking__container_info_head_desc']}>DeFi staking includes various development
                    criteria that include:</h3>
                <div className={`${style['staking__container_info_head_block']}`}>
                    {cards.item2.map((item: CardItem, index: number) =>
                        <div className={`${style['staking__container_info_head_block_card']}`} key={`${index}_card`}>
                            <div className={style['staking__container_info_head_block_card_circle']}>
                                <img src={item.source} alt={item.alt} />
                            </div>
                            <div className={`${style['staking__container_info_head_block_card_text-container']}`}>
                                <h2>{item.title}</h2>
                                <h3>{item.desc}</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StakingCards;