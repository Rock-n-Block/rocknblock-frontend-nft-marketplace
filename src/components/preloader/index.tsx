import { FunctionComponent, h } from 'preact';
import styles from './style.scss';


const Preloader: FunctionComponent = () => {
    return (
        <div class={styles.preloader}>
            <div class={styles.container}>
                <div class={styles.boll1} />
                <div class={styles.boll2} />
                <div class={styles.boll3} />
            </div>
        </div>
    )
};

export default Preloader;
