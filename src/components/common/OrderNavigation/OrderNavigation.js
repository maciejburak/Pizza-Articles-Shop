import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderNavigation.module.scss';
import { Button } from '@material-ui/core';
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi';

function OrderNavigation({ basket, goBack, sendOrderInProgress }) {
  return basket.length != 0 ? (
    !goBack ? (
      <div className={styles.orderNavigation}>
        <h1>CHECK YOUR ORDER</h1>
        <Button onClick={() => sendOrderInProgress('')}>
          <a href="/order">
            Go to the order <BiRightArrowCircle />
          </a>
        </Button>
      </div>
    ) : (
      <div className={styles.orderNavigation}>
        <h1>GO BACK TO SHOPPING</h1>
        <Button>
          <a href="/">
            <BiLeftArrowCircle /> Go Back
          </a>
        </Button>
      </div>
    )
  ) : null;
}

OrderNavigation.propTypes = {
  basket: PropTypes.array,
  goBack: PropTypes.bool,
  sendOrderInProgress: PropTypes.func,
};

export default OrderNavigation;
