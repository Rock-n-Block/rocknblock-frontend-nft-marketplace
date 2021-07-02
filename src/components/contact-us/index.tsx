import {FunctionalComponent, h} from 'preact';
import {useState} from "preact/hooks";

import style from './style.scss';

import BlockHeader from "../block-header";

const ContactUs: FunctionalComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [idea, setIdea] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    const formData = JSON.stringify({name: name, socialNetwork: contact, message: idea});
    console.log(formData);

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    fetch(`https://newlp.mywish.io/api/v1/send_unblocking_feedback/`, {
      method: 'POST',
      headers: headers,
      mode: 'no-cors',
      body: formData
    }).then(response => console.log('OK:', response.json())).catch(response => console.log('Error:', response));

    setName('');
    setContact('');
    setIdea('');
    setIsSubmitted(true);
  }

  const onSetName = (e: any) => {
    console.log('Name:', e.target.value);
    setName(e.target.value);
  }

  const onSetContact = (e: any) => {
    console.log('Contact:', e.target.value);
    setContact(e.target.value);
  }

  const onSetIdea = (e: any) => {
    console.log('Idea:', e.target.value);
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
          "Our stack consists of languages that are productive, reliable, and scalable. Discover how they can help build better software."
      />
      <form name="contact-us-form" onSubmit={() => onSubmit(event)} className={style['contact-us__form']}>
        <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
        <input type="hidden" name="action" value="validate_captcha" />
        <input
          className={style['contact-us__form__input']}
          type='text'
          placeholder='Name'
          value={name}
          onInput={() => onSetName(event)}
        />
        <label htmlFor="" className={style['visually-hidden']}>Enter your name</label>
        <input
          className={style['contact-us__form__input']}
          type="text"
          placeholder='Your contact (telegram, email, ...)'
          value={contact}
          onInput={() => onSetContact(event)}
        />
        <label htmlFor="" className={style['visually-hidden']}>
          Enter how we can contact with you, like telegram, email, etc
        </label>
        <textarea
          className={`${style['contact-us__form__input']} ${style['contact-us__form__input-textarea']}`}
          rows={1}
          placeholder="Briefly describe your project or idea"
          value={idea}
          onInput={() => onSetIdea(event)}
        />
        <label htmlFor="" className={style['visually-hidden']}>Briefly describe your project or idea</label>
        <button
          type="submit"
          className=
            {`${style['g-recaptcha']} ${style['contact-us__form__submit-btn']} ${style.btn} ${style['btn-orange']} ${style['btn-rounded']}`}
        >
          Submit request
        </button>
      </form>
      <div id="contact-us-popup" className={`${style['contact-us__popup-container']} ${isSubmitted ? style.show : null}`}>
        <div className={`${style['contact-us__popup']} ${style.popup}`}>
          <h3 className={style.popup__title}>Thanks for your request!</h3>
          <button
            className={`${style.btn} ${style['btn-orange']} ${style['btn-rounded']} ${style['popup__button-ok']}`}
            onClick={() => setIsSubmitted(false)}
          >
            Close/ok
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