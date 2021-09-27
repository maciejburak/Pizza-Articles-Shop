import React, {useState} from 'react';
import styles from './AboutUs.module.scss';
import { MdHighQuality } from 'react-icons/md';
import { GiTripleGate } from 'react-icons/gi';
import { SiCashapp } from 'react-icons/si';
import { IoIosHelpBuoy } from 'react-icons/io';
import Contact from '../Contact/Contact';

export const AboutUs = (props) => {
  const [contactActive, setContactActive] = useState(false);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.offer}>
        <div className={styles.box}>
          <MdHighQuality />
          <h2>HIGH QUALITY ITEMS</h2>
          <p>
            In our store we can offer you the best pizza items in the highest
            word s quality. To every accesorie we adding guarantee and also
            after 14 days if product no meets your expectations you will return
            product with no extra costs.
          </p>
        </div>
        <div className={styles.box}>
          <GiTripleGate />
          <h2>NEW EXPERIENCES</h2>
          <p>
            You will can enjoying your proffesional pizza staff and explore new
            ways in cooking development. Our items will can give you things
            which ones do not feel in other pizza staff.{' '}
          </p>
        </div>
        <div className={styles.box}>
          <SiCashapp />
          <h2>EXCLUSIVE RATES</h2>
          <p>
            By registering, you will access specially negotiated rates that you
            will not find anywhere else. Safe our money and try our discount
            offer. Our employees will help you choose the best option.
          </p>
        </div>
      </div>
      <div className={styles.newsletter}>
        <div className={styles.receiveOffers}>
          <h1>RECEIVE OFFERS</h1>
          <p>Taste the holidays of the everyday close to home.</p>
          <input type="e-mail" placeholder="E-mail" />
          <button>KEEP ME UPDATED</button>
        </div>
        <img
          src="https://cdn.upmenu.com/static/attributes/d9507da7-1f12-11e5-ac27-00163edcb8a0/7424e4f9-687d-11eb-bdef-525400080521/2d4300bd-d13c-43c0-8035-13f03ed61159/pizza-3007395_1920.jpg"
          alt="pizza"
        />
      </div>
      {contactActive ? <Contact close={setContactActive}/> : null}
      <div className={styles.help}>
        <button onClick={() => setContactActive(true)}>
          GOT ANY QUESTIONS? NEED HELP?
        </button>
        <p>We are here to help. Get in touch!</p>
        <IoIosHelpBuoy />
      </div>
    </div>
  );
};


export default AboutUs;
