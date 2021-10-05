import {FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';

import {
    About,
    WhyUs,
    AreasOfExpertise,
    WhatWeDoBest,
    CaseStudies,
    Team,
    OurPartners,
    ContactUs,
    UpButton,
    TelegramWidget, ClientsFeedback
} from "../../components";

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
        <div>
            <TelegramWidget />
            <About />
            {isActive ? <UpButton /> : null}
            <WhyUs />
            <AreasOfExpertise />
            <WhatWeDoBest />
            <CaseStudies />
            <Team />
            <OurPartners />
            <ClientsFeedback />
            <ContactUs title={'Estimate your project now!'}
                       subtitle={'Get free consultation and build your blockchain project with our highly qualified team!'} />
            {/*{isPopupClosed === 'yes' ? null : <PopUp />}*/}
        </div>
    )
}

export default HomePage;
