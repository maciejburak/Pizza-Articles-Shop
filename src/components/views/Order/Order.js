import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';
import { TextField } from '@material-ui/core';
import TopBar from '../../layout/TopBar/TopBar';


function Order({ basket, sendOrderDone, clearBasket, delateCurrentOrder }) {
  const [order, setOrder] = useState('');
  useEffect(() => {
    fetch('http://localhost:8000/api/doneOrder')
      .then((res) => res.json())
      .then((element) => setOrder(element));
  }, []);
  console.log(order);
  return (
    <div className={styles.order}>
      <TopBar open={true} rwd={true} />
      <div className={styles.orderForm}>
        <div className={styles.orderSummary}>
          <h2>Your Order</h2>
          <ul>
            {basket.map((element) => (
              <li key={element.name}>
                <p>{element.value} </p>
                <h5>{element.name}</h5>
                <p>{element.price}$</p>
              </li>
            ))}
          </ul>
          <input type="text" /*value ={order.description}*//>
          <div className ={styles.sum}>
              Total: 
          </div>
        </div>
        <div className={styles.ordererDetails}>
          <h2>Your details</h2>
          <div className={styles.name}>
            <TextField
              required
              id="first-name"
              label="First Name"
              placeholder="First Name"
            />
            <TextField
              required
              id="last-name"
              label="Last Name"
              placeholder="Last Name"
            />
          </div>
          <div className={styles.home}>
            <TextField required id="City" label="City" placeholder="City" />
            <TextField
              required
              id="ZIP-CODE"
              label="ZIP-CODE"
              placeholder="ZIP-CODE"
            />
            <TextField required id="House" label="House" placeholder="House" />
          </div>
          <TextField required id="e-mail" label="e-mail" placeholder="E-mail" />
        </div>
      </div>
      <div className={styles.buttons}>
        <a onClick={() => (sendOrderDone(), clearBasket())}>
          Send Order
        </a>
        <a onClick={() => (delateCurrentOrder(order.key), clearBasket())}>
          Delete Order
        </a>
      </div>
    </div>
  );
}

Order.propTypes = {
  basket: PropTypes.array,
  sendOrderDone: PropTypes.func,
  clearBasket: PropTypes.func,
  currentOrder: PropTypes.func,
  delateCurrentOrder: PropTypes.func,
};

export default Order;
