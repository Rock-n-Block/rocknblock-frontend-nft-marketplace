import {
    Fragment, FunctionComponent, h
} from 'preact';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { SiteCard } from '../../../components';

import styles from './HomePageSites.module.scss';
import { otherSites } from './mock';

const HomePageSites: FunctionComponent = () => (
    <Fragment>
        <div className={styles.sliderWrapper}>
            <Swiper
                slidesPerView='auto'
                centeredSlides
                grabCursor
                className={styles.slider}
                loop
            >
                {otherSites.map((site) => (
                    <SwiperSlide key={site.title} className={styles.slide}>
                        <SiteCard
                            image={site.image}
                            title={site.title}
                            link={site.link}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </Fragment>
);

export default HomePageSites;
