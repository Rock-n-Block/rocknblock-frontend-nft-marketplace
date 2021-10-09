import {Fragment, FunctionalComponent, h} from 'preact';
import {About, HowItWorks, HowItWorksCards, NftGenerator, ContactUs} from "../../components";


const HomePage: FunctionalComponent = () => {

    return (
        <Fragment>
            <About />
            <HowItWorksCards />
            <HowItWorks />
            <NftGenerator />

            <ContactUs title={'GET LIVE TECHNICAL DEMO'} />
        </Fragment>
    )
};

export default HomePage;
