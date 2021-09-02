import React, { useState, useEffect } from 'react';
//import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Basket.module.scss';
import { Button } from '@material-ui/core';
import { countBasket } from '../../../utils';

function useForceUpdate(){
  const [value, setValue] = useState(0); 
  return () => setValue(value => value + 1); 
}

function Basket({ basket }) {
  setTimeout(useForceUpdate(), 1000);

  return (
    <div className={styles.basket}>
      <h2>Ordered list</h2>
      <div className={styles.content}>
        {basket.map((item) => (
          <div className={styles.position} key={item.name}>
            <p>{item.value}</p>
            <p>{item.name}</p>
            <p>{item.price}$</p>
            <span className={styles.lineGrey}></span>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <div className={styles.line}></div>
        <div className={styles.sum}>
          <p>
            <b>Total: {countBasket(basket)}$</b>
          </p>
          <Button variant="contained" color="primary">
            Order
          </Button>
        </div>
      </div>
    </div>
  );
}

Basket.propTypes = {
  basket: PropTypes.array,
};

export default Basket;