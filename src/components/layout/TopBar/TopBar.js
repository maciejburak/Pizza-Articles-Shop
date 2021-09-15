import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import styles from './TopBar.module.scss';
import PropTypes from 'prop-types';
import DropDownMenu from '../../common/DropDownMenu/DropDownMenu';
import Basket from '../../features/Basket/BasketContainer.js';
import { Link } from 'react-router-dom';
import Search from '../../features/Search/SearchContainer';
import RWDMenu from '../RWDMenu/RWDMenu';
import { BiMenu } from 'react-icons/bi';

function TopBar({ open, rwd }) {
  const [toggleValue, setToggleValue] = useState(false);
  const [activeBucket, setActiveBucket] = useState(false);
  const [rwdMenu, setRwdMenu] = useState(false);
  return !toggleValue ? (
    <div className={styles.topBar}>
      <div className={styles.leftSide}>
        <Search />
      </div>
      <div className={styles.center}>
        <Link to="/">Your Dreamed Oven</Link>
      </div>
      <div className={styles.rightSide}>
        <Link to="/recipe">PIZZA RECIPE</Link>
        {!open ? (
          <a onClick={(e) => e.preventDefault()}></a>
        ) : (
          <a onClick={toggleValue == false ? () => setToggleValue(true) : null}>
            SHOP
            <IoIosArrowDown className={styles.arrow} />
          </a>
        )}

        <a
          onClick={
            !activeBucket
              ? () => setActiveBucket(true)
              : () => setActiveBucket(false)
          }
        >
          <AiOutlineShoppingCart />
        </a>
      </div>
      {activeBucket ? <Basket /> : null}
      {rwd ? (
        <button
          className={styles.rwdMenuButton}
          onClick={!rwdMenu ? () => setRwdMenu(true) : () => setRwdMenu(false)}
        >
          <BiMenu />
        </button>
      ) : null}

      {rwdMenu ? (
        <RWDMenu
          activeBucket={activeBucket}
          toggleValue={toggleValue}
          funcSetTV={setToggleValue}
          funcSetAB={setActiveBucket}
          funcSetRWD={setRwdMenu}
        />
      ) : null}
    </div>
  ) : (
    <DropDownMenu toggleMenuValue={toggleValue} func={setToggleValue} />
  );
}

TopBar.propTypes = {
  open: PropTypes.bool,
  rwd: PropTypes.bool,
};

export default TopBar;
