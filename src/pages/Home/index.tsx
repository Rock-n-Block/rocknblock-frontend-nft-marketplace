import {Fragment, FunctionalComponent, h} from 'preact';
import {About, HowItWorks, HowItWorksCards} from "../../components";


const HomePage: FunctionalComponent = () => {

    return (
        <Fragment>
            <About />
            <HowItWorksCards />
            <HowItWorks />
        </Fragment>
    )
};

export default HomePage;
