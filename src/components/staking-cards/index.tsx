import {FunctionalComponent, h} from "preact";
import style from "../staking-block/style.scss";
import {CardItem, cards} from "../../assets/data/stakingCards";

const StakingCards: FunctionalComponent = () => {
    return (
        <div className={`${style['staking__container_info']}`}>
            <div className={`${style['staking__container_info_head_1']}`}>
                <p className={style['staking__container_info_head_1_title']}>Unlimited ways to earn rewards for users</p>
                <div className={`${style['staking__container_info_block']}`}>
                    {cards.item1.map((item: CardItem, index: number) =>
                        <div className={`${style['staking__container_info_block_card']}`} key={`${index}_card`}>
                            <img src={item.source} alt={item.alt} />
                            <div className={`${style['staking__container_info_block_card_text-container']}`}>
                                <h2>{item.title}</h2>
                                <h3>{item.desc}</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className={`${style['staking__container_info_head_2']}`}>
                <p className={style['staking__container_info_head_2_title']}>Staking Development Flow</p>
                <p className={style['staking__container_info_head_2_desc']}>DeFi staking includes various development criteria that include:</p>
                <div className={`${style['staking__container_info_block']}`}>
                    {cards.item2.map((item: CardItem, index: number) =>
                        <div className={`${style['staking__container_info_block_card']}`} key={`${index}_card`}>
                            <img src={item.source} alt={item.alt} />
                            <div className={`${style['staking__container_info_block_card_text-container']}`}>
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