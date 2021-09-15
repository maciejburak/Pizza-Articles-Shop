import React from 'react';
import styles from './Quote.module.scss';
import { ImQuotesRight, ImQuotesLeft } from 'react-icons/im';

function Quote() {
  return (
    <div className={styles.quote}>
      <div className={styles.quoteOpen}>
        <ImQuotesRight />
      </div>
      <div className={styles.text}>
        <p>Don`t be yourself, be a pizza. Everyone loves pizza.</p>
      </div>
      <div className={styles.quoteClose}>
        <ImQuotesLeft />
      </div>
    </div>
  );
}

export default Quote;
