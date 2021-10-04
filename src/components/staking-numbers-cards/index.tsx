import {FunctionalComponent, h} from "preact";
import style from "../staking-about/style.scss";
import {AchievementsData, achievementsData} from "../../assets/data/stakingAchievements";

const StakingNumbersCards: FunctionalComponent = () => {
    return (
        <div className={`${style.w1000px} ${style['staking__about-us']}`}>
            <h2 className={style['staking__about-us_title']}>Numbers tell about us</h2>
            <div className={style['staking__about-us_container']}>
                <div style={{minWidth: 970, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {achievementsData.map((item: AchievementsData, index: number) =>
                        <div key={`${index}_card`} className={style['staking__about-us_container_item']}>
                            <div className={style['staking__about-us_container_item_img']}>
                                <img src={item.source} alt={item.alt} />
                            </div>
                            <div className={style['staking__about-us_container_item_text']}>
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

export default StakingNumbersCards;