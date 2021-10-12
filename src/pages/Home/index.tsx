import {Fragment, FunctionalComponent, h} from 'preact';
import {
    ContactUs,
    UpButton
} from "../../components";
import TelegramWidget from "../../components/telegram-widget";
import {useState} from "preact/hooks";


const HomePage: FunctionalComponent = () => {

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
        <Fragment>
            <TelegramWidget />
            {isActive ? <UpButton /> : null}


            <ContactUs title={'GET LIVE TECHNICAL DEMO'} />
        </Fragment>
    )
};

export default HomePage;
