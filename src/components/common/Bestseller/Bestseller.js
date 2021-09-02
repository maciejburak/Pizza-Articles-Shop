import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bestseller.module.scss';

function Bestseller(props) {
  return (
    <div className={styles.bestseller}>
      <h2 className={styles.header}>Bestseller</h2>
      <div className={styles.content}>
        <div className={styles.photo}>
          <img
            src="https://yorkshirefoodguide.co.uk/wp-content/uploads/2021/01/Delivita-Hale-pizza-oven-sunset-landscape.jpg"
            alt="oven"
          />
        </div>
        <div className={styles.description}>
          <h2>Product name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            maximus magna ut augue feugiat pretium. In urna tellus, euismod non
            diam ut, varius condimentum leo.
          </p>
          <p>Price: 20$</p>
        </div>
      </div>
    </div>
  );
}

Bestseller.propTypes = {};

export default Bestseller;
