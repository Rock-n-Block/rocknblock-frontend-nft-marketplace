import {FunctionalComponent, h} from 'preact';
import style from './style.scss'
import {useState} from "preact/hooks";

interface FeedbackCard {
    title: string;
    desc: string;
    imgClient: string;
    imgLogo: string;
    altClient: string;
    altLogo: string;
}

const feedbackCard: FeedbackCard[][] = [
    [
        {
            title: 'ENQ (Enecuum)',
            desc: 'We would like to thank @mywishplatform for a reliable and easy to use service which helped us to distribute Airdrop tokens. Great job http://MyWish.io !',
            imgClient: '../../assets/img/icons/icon-client-feedback-mock.svg',
            imgLogo: '../../assets/img/icons/icon-facebook.svg',
            altClient: 'client feedback',
            altLogo: 'facebook'
        },
        {
            title: 'Kephi',
            desc: 'Con nuestro objetivo de convertirnos en un #NFTmarketplace de última generación, nos hemos asociado con el gigante blockchain @RocknBlock2 que ha crecido hasta convertirse en socio de actores como @binance @0xPolygon @Tronfoundation @Changelly_team',
            imgClient: '../../assets/img/icons/icon-client-feedback-kephi.svg',
            imgLogo: '../../assets/img/icons/icon-facebook.svg',
            altClient: 'client kephi',
            altLogo: 'facebook'
        },
    ],
    [
        {
            title: 'Kephi',
            desc: 'Con nuestro objetivo de convertirnos en un #NFTmarketplace de última generación, nos hemos asociado con el gigante blockchain @RocknBlock2 que ha crecido hasta convertirse en socio de actores como @binance @0xPolygon @Tronfoundation @Changelly_team',
            imgClient: '../../assets/img/icons/icon-client-feedback-mock.svg',
            imgLogo: '../../assets/img/icons/icon-facebook.svg',
            altClient: 'client feedback',
            altLogo: 'facebook'
        },
        {
            title: 'ENQ (Enecuum)',
            desc: 'We would like to thank @mywishplatform for a reliable and easy to use service which helped us to distribute Airdrop tokens. Great job http://MyWish.io !',
            imgClient: '../../assets/img/icons/icon-client-feedback-kephi.svg',
            imgLogo: '../../assets/img/icons/icon-facebook.svg',
            altClient: 'client kephi',
            altLogo: 'facebook'
        },
    ],
]

const ClientsFeedback: FunctionalComponent = () => {
    const [activePage, setActivePage] = useState<number>(0);

    const switchRight = (): void => {
        activePage >= 0 && activePage < feedbackCard.length - 1 ? setActivePage(activePage + 1) : setActivePage(0)
    }

    const switchLeft = (): void => {
        activePage === 0 ? setActivePage(feedbackCard.length - 1) : ''
        activePage > 0 ? setActivePage(activePage - 1) : ''
    }

    return (
        <div className={`${style.container} ${style['clients-feedback']}`}>
            <h2 className={style['clients-feedback__title']}>What our clients tell about us</h2>
            <div className={`${style['clients-feedback__cards']} ${style.desktop}`}>
                <button className={style['switchIcon_left']} onClick={(): void => switchLeft()}>
                    <img src={'../../assets/img/icons/icon-arrow-black-left.svg'} alt="switch left icon" />
                </button>
                {feedbackCard[activePage].map((item: FeedbackCard, index: number) =>
                    <div key={`${index}_feedback_card`} className={style['clients-feedback__cards_item']}>
                        <div>
                            <div className={style['clients-feedback__cards_item_images']}>
                                <img src={item.imgClient} alt={item.altClient} />
                                <img src={item.imgLogo} alt={item.altLogo} />
                            </div>
                            <div className={style['clients-feedback__cards_item_desc']}>
                                <h2>{item.title}</h2>
                                <h3>{item.desc}</h3>
                            </div>
                        </div>
                    </div>
                )}
                <button className={style['switchIcon_right']} onClick={(): void => switchRight()}>
                    <img src={'../../assets/img/icons/icon-arrow-black-right.svg'} alt="switch right icon" />
                </button>
            </div>

            <div className={`${style['clients-feedback__cards']} ${style.mobile}`}>
                {(feedbackCard.flat()).map((item: FeedbackCard, index: number) =>
                    <div key={`${index}_feedback_card`} className={style['clients-feedback__cards_item']}>
                        <div>
                            <div className={style['clients-feedback__cards_item_images']}>
                                <img src={item.imgClient} alt={item.altClient} />
                                <img src={item.imgLogo} alt={item.altLogo} />
                            </div>
                            <div className={style['clients-feedback__cards_item_desc']}>
                                <h2>{item.title}</h2>
                                <h3>{item.desc}</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClientsFeedback;