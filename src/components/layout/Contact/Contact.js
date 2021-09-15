import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';
import { Button, TextField } from '@material-ui/core';
import { GoPerson } from 'react-icons/go';
import { GrMail } from 'react-icons/gr';
import { FaKey } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';



export const Contact = ({close}) => {
  return (
    <div className={styles.contact}>
      <div className={styles.form}>
        <ImCross className={styles.cross} onClick={()=>close(false)}/>
        <h2>HELP/CONTACT US</h2>
        <div className={styles.section}>
          <GoPerson/>
          <TextField placeholder='Name'/>
        </div>
        <div className={styles.section}>
          <GrMail/>
          <TextField placeholder='E-mail'/>
        </div>
        <div className={styles.section}>
          <FaKey/>
          <TextField placeholder='Write heare your problem'/>
        </div>
        <Button variant="contained" color="primary" onClick={()=>close(false)}>
          Send
        </Button>
      </div>
    </div>
  );
};

Contact.propTypes = {
  close: PropTypes.func,
};

export default Contact;

