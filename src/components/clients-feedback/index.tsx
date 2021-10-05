import {FunctionalComponent, h} from 'preact';
import style from './style.scss'

const ClientsFeedback: FunctionalComponent = () => {
    return (
        <div className={`${style.container} ${style['clients-feedback']}`}>
            <h2>What our clients tell about us</h2>
            <div>
                <div>
                    <div>
                        <img />
                        <img />
                    </div>
                    <div>
                        <h2>ENQ (Enecuum)</h2>
                        <h3>We would like to thank @mywishplatform for a reliable and easy to use service which helped
                            us to distribute Airdrop tokens. Great job http://MyWish.io !</h3>
                    </div>
                </div>
                <div />
            </div>
        </div>
    );
};

export default ClientsFeedback;