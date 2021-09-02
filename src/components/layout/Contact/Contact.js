import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { TextField } from '@material-ui/core';

export const Contact = (props) => {
  return (
    <div className={styles.contact}>
      <div className={styles.description}>
        <h1>Reach out</h1>
        <p>
          We want to talk to you about your problems and expectations.
          Tell us more about your needs and we’ll get in touch with a custom
          quote.
        </p>
      </div>
      <div className={styles.form}>
        <TextField label="First Name"/>
        <TextField label="Last Name" />
        <TextField label="E-mail" />
      </div>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
{
  /*<div id="contact" className={styles.contact}>
      <h1>CONTACT</h1>
      <p>
        It is easy to get in touch with us, and we are always delighted to hear
        from you. Whatever your question, query, or concern, our amazing
        Customer Service team are here to help.
      </p>
      <h4>THE CUSTOMER SERVICE TEAM OPERATING HOURS:</h4>
      <ul>
        <li>
          <b>Mon to Fri:</b> 9am - 5pm
        </li>
        <li>
          <b>Weekends, Bank and Public Holidays:</b>Phone lines are closed,
          please contact Customer Services via info@biggreenegg.co.uk and we
          will endeavour to respond to you as soon as possible.
        </li>
      </ul>
      <h4>BY PHONE:</h4>
      <p>+48 222 333 444</p>
      <h4>BY EMAIL:</h4>
      <p>info@test.co.us</p>
      <div className={styles.content}>
        <div className={styles.inputForm}>
          <p>
            Sign up for tasty recipes, exclusive product launches, and unique
            experiences.
          </p>
          <label>
            Name: <input type="text" />
          </label>
          <label>
            E-mail: <input type="text" />
          </label>
          <div className={styles.socialMedia}>
            <FaFacebook />
            <AiFillInstagram />
            <AiOutlineTwitter />
          </div>
        </div>
        <div className={styles.contactData}>
          <h3>Contact Data</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor .</p>
          <p>Lorem ipsum </p>
        </div>
      </div>
  </div>*/
}
