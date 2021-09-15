import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckOrder.module.scss';
import { Button } from '@material-ui/core';
import { BiRightArrowCircle } from 'react-icons/bi';

function CheckOrder({ basket }) {
  return basket.length != 0 ? <div className={styles.checkOrder}>
    <h1>CHECK YOUR ORDER</h1>
    <Button><a href="/order">Go to the order <BiRightArrowCircle/></a></Button>
  </div> : null;
}

CheckOrder.propTypes = {
  basket: PropTypes.array,
};

export default CheckOrder;
