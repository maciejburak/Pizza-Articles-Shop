import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Basket.module.scss';
import { Button } from '@material-ui/core';
import { countBasket } from '../../../utils';
import { ImCross } from 'react-icons/im';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { BiSave } from 'react-icons/bi';

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

function Basket({ basket, sendOrderInProgress, delateOrder }) {
  setTimeout(useForceUpdate(), 1000);
  const [comment, setComent] = useState('');
  const [inputVisable, setInputVisable] = useState(false);
  const [finalDescription, setFinalDescription] = useState('');
  return (
    <div className={styles.basket}>
      <h2>Ordered list</h2>
      <div className={styles.content}>
        {basket.map((item) => (
          <div className={styles.position} key={item.name}>
            <a onClick={(e) => (e.preventDefault(), delateOrder(item.name))}>
              <ImCross />
            </a>
            <p>{item.value}</p>
            <p>{item.name}</p>
            <p>{item.price}$</p>
            <span className={styles.lineGrey}></span>
          </div>
        ))}
      </div>
      <div className={styles.comment}>
        {!inputVisable ? (
          <button
            className={styles.addToOrder}
            onClick={() => setInputVisable(true)}
          >
            Add Order Comment <BsFillPlusSquareFill />
          </button>
        ) : (
          <div>
            <button onClick={() => (setComent(''), setInputVisable(false))}>
              <ImCross />
            </button>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComent(e.target.value)}
            />
            <button
              onClick={() => (
                setFinalDescription(comment),
                setComent(''),
                setInputVisable(false)
              )}
            >
              <BiSave />
            </button>
          </div>
        )}
      </div>
      <div className={styles.total}>
        <div className={styles.line}></div>
        <div className={styles.sum}>
          <p>
            <b>Total: {countBasket(basket)}$</b>
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => sendOrderInProgress(finalDescription)}
          >
            <a href="/order">CHECK ORDER</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

Basket.propTypes = {
  basket: PropTypes.array,
  sendOrderInProgress: PropTypes.func,
  delateOrder: PropTypes.func,
};

export default Basket;
