import {FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';

import style from './style.scss';

import BlockHeader from '../block-header';

import useGoogleReCaptchaV2 from '../../hooks/useGoogleReCaptcha';
import { RECAPTCHA_KEY } from '../../definitions';

const ContactUs: FunctionalComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [idea, setIdea] = useState('');
  const [token, setToken] = useState('');

  const { ReCaptchaBadge, executeReCaptcha } = useGoogleReCaptchaV2({
    siteKey: RECAPTCHA_KEY
  });

  const formData = JSON.stringify({name, socialNetwork: contact, message: idea});

  const headers = {
    'Content-Type': 'application/json',
  };

  const fetchForm = (token: string): void => {
    if (token) fetch(`https://newlp.mywish.io/api/v1/send_unblocking_feedback/`, {
      method: 'POST',
      headers,
      body: formData
    }).then(response => {
      if (response.ok) {
        console.log('OK:', response.json());
        setIsSubmitted(true);
      } else {
        console.log('Error:', response);
      }
    }).catch(response => console.log('Error:', response));
  }

  const onSubmit = async (e: Event | undefined): Promise<void> => {
    if (e) e.preventDefault();

    if (name && contact && idea) {
      setIsCompleted(true);
      try {
        const token = await executeReCaptcha();
        setToken(token);
        fetchForm(token);
      } catch (e) {
        console.error(e);
      }

      setName('');
      setContact('');
      setIdea('');
    } else {
      setIsCompleted(false);
      setIsSubmitted(true);
    }
  }

  const onSetName = (e: any): void => {
    setName(e.target.value);
  }

  const onSetContact = (e: any): void => {
    setContact(e.target.value);
  }

  const onSetIdea = (e: any): void => {
    setIdea(e.target.value);
  }

  return (
    <div className={`${style['contact-us']} ${style.container}`} id="contact-us">
      <div className={style['background-img']}>
        <img src="../../assets/img/background-contact.png" alt="background-img" />
      </div>
      <BlockHeader
        style={style}
        primary="Estimate your project now!"
        secondary=
          "Get free consultation and build your blockchain project with our highly qualified team!"
      />
      <form name="contact-us-form" onSubmit={(): Promise<void> => onSubmit(event)} className={style['contact-us__form']}>
        <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
        <input type="hidden" name="action" value="validate_captcha" />
        <input
          className={style['contact-us__form__input']}
          type='text'
          placeholder='Name'
          value={name}
          onInput={(): void => onSetName(event)}
        />
        <label htmlFor="" className={style['visually-hidden']}>Enter your name</label>
        <input
          className={style['contact-us__form__input']}
          type="text"
          placeholder='Your contact (telegram, email, ...)'
          value={contact}
          onInput={(): void => onSetContact(event)}
        />
        <label htmlFor="" className={style['visually-hidden']}>
          Enter how we can contact with you, like telegram, email, etc
        </label>
        <textarea
          className={`${style['contact-us__form__input']} ${style['contact-us__form__input-textarea']}`}
          rows={1}
          placeholder="Briefly describe your project or idea"
          value={idea}
          onInput={(): void => onSetIdea(event)}
        />
        <label htmlFor="" className={style['visually-hidden']}>Briefly describe your project or idea</label>
        <button
          type="submit"
          className=
            {`${style['contact-us__form__submit-btn']} ${style.btn} ${style['btn-orange']} ${style['btn-rounded']}`}
        >
          Submit request
        </button>
        <div className={style['g-recaptcha']}>
          {ReCaptchaBadge && ReCaptchaBadge}
        </div>
      </form>
      <div id="contact-us-popup" className={`${style['contact-us__popup-container']} ${isSubmitted ? style.show : null}`}>
        <div className={`${style['contact-us__popup']} ${style.popup}`}>
          <h3 className={style.popup__title}>{isCompleted ? 'Thanks for your request!' : 'Wrong input, please try again'}</h3>
          <button
            className={`${style.btn} ${style['btn-orange']} ${style['btn-rounded']} ${style['popup__button-ok']}`}
            onClick={(): void => setIsSubmitted(false)}
          >
            Close
          </button>
          <div className={`${style['background-img']} ${style['background-img-left']}`}>
            <img src="../../assets/img/background-popup-left.png" alt="background-popup-left" />
          </div>
          <div className={`${style['background-img']} ${style['background-img-right']}`}>
            <img src="../../assets/img/background-popup-right.png" alt="background-popup-right" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;