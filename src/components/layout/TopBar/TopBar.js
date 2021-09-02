import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import styles from './TopBar.module.scss';
import PropTypes from 'prop-types';
import DropDownMenu from '../../common/DropDownMenu/DropDownMenu';
import Basket from '../../features/Basket/BasketContainer.js';
import { Link } from 'react-router-dom';

function TopBar() {
  const [toggleValue, setToggleValue] = useState(false);
  const [activeBucket, setActiveBucket] = useState(false);

  return !toggleValue ? (
    <div className={styles.topBar}>
      <div className={styles.leftSide}>
        <Link to="/about">ABOUT US</Link>
        <a
          onClick={
            toggleValue == false
              ? () => setToggleValue(true)
              : () => setToggleValue(false)
          }
        >
          SHOP
          <IoIosArrowDown className={styles.arrow} />
        </a>
      </div>
      <div className={styles.center}>
        <h1>Your Dreamed Oven</h1>
      </div>
      <div className={styles.rightSide}>
        <Link to='/recipe'>PIZZA RECIPE</Link>
        <Link to='/contact'>CONTACT</Link>
        <a onClick={!activeBucket? () => setActiveBucket(true): () => setActiveBucket(false)}>
          <AiOutlineShoppingCart />
        </a>
        {activeBucket ? <Basket /> : null}
      </div>
    </div>
  ) : (
    <DropDownMenu toggleMenuValue={toggleValue} func={setToggleValue} />
  );
}

TopBar.propTypes = {};

export default TopBar;
