import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.module.scss';
import { TextField } from '@material-ui/core';
import { countBasket } from '../../../utils';

export const OrderForm = ({
  basket,
  description,
  sendOrderDone,
  clearBasket,
  delateCurrentOrder,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [house, setHouse] = useState('');
  const [email, setEmail] = useState('');
  const personalData = [
    {
      FirsName: firstName,
      LastName: lastName,
      City: city,
      ZIPCODE: zipCode,
      House: house,
      EMail: email,
    },
  ];
  return (
    <div className={styles.orderForm}>
      <div className={styles.form}>
        <div className={styles.orderSummary}>
          <h2>Order summary</h2>
          <ul>
            {basket.map((element) => (
              <li key={element.name}>
                <p>
                  <span>{element.value}</span> x
                </p>
                <h5>{element.name}</h5>
                <p>{element.price}$</p>
              </li>
            ))}
          </ul>
          {description ? (
            <p className={styles.description}><span>Description:</span> {description}</p>
          ) : null}
          <div className={styles.sum}>
            <div>Delivery: <span>20$</span></div>
            <div>Products: <span>{countBasket(basket)}$</span></div>
            <div>Total: <span>{countBasket(basket)!=0?countBasket(basket)+20:0}$</span></div>
          </div>
        </div>
        <div className={styles.orderDetails}>
          <div className={styles.name}>
            <TextField
              label="First Name"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.home}>
            <TextField
              label="City"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              label="ZIP-CODE"
              placeholder="ZIP-CODE"
              onChange={(e) => setZipCode(e.target.value)}
            />
            <TextField
              label="House"
              placeholder="House"
              onChange={(e) => setHouse(e.target.value)}
            />
          </div>
          <TextField
            label="e-mail"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => (sendOrderDone(personalData), clearBasket())}>
          <a href="/">Send Order</a>
        </button>
        <button onClick={() => (delateCurrentOrder(), clearBasket())}>
          <a href="/">Delete Order</a>
        </button>
      </div>
    </div>
  );
};

OrderForm.propTypes = {
  basket: PropTypes.array,
  description: PropTypes.string,
  sendOrderDone: PropTypes.func,
  clearBasket: PropTypes.func,
  currentOrder: PropTypes.func,
  delateCurrentOrder: PropTypes.func,
};

export default OrderForm;
