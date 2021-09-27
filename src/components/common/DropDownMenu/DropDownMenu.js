import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DropDownMenu.module.scss';
import flour from '../../../images/flour.png';
import oven from '../../../images/oven.png';
import acessories from '../../../images/acessories.png';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import TopBar from '../TopBar/TopBar.js';


function DropDownMenu({ toggleMenuValue, func } ) {
  const [flourDisplay, setFlourDisplay] = useState(false);
  const [ovenDisplay, setOvenDisplay] = useState(false);
  const [acessoriesDisplay, setAcessoriesDisplay] = useState(false);

  const tsmAnimation = {
    style: {
      animation: `${
        toggleMenuValue ? styles.fadeIn : styles.fadeOut
      } 1s linear forwards`,
    },
  };

  return toggleMenuValue ? (
    <div className={styles.topShopMenu} {...tsmAnimation}>
      <TopBar rwd={false}/>
      <div className={styles.optionList}>
        <div
          onMouseEnter={() => setFlourDisplay(true)}
          onMouseLeave={() => setFlourDisplay(false)}
        >
          <Link onClick={()=> func(false)} to ='/flours'>Flours</Link>
          {flourDisplay ? (
            <i className={styles.one}>Choose your type of italian flour</i>
          ) : null}
        </div>
        <div
          onMouseEnter={() => setOvenDisplay(true)}
          onMouseLeave={() => setOvenDisplay(false)}
        >
          <Link onClick={()=> func(false)} to ='/ovens'>Ovens</Link>
          {ovenDisplay ? (
            <i className={styles.two}>Check our available ovens</i>
          ) : null}
        </div>
        <div
          onMouseEnter={() => setAcessoriesDisplay(true)}
          onMouseLeave={() => setAcessoriesDisplay(false)}
        >
          <Link onClick={()=> func(false)} to ='/acessories'>Acessories</Link>
          {acessoriesDisplay ? (
            <i className={styles.three}>The ones and onlys pizza accesories</i>
          ) : null}
        </div>
      </div>
      <div className={styles.images}>
        {flourDisplay ? (
          <img src={flour} alt="flour"/>
        ) : null}
        {ovenDisplay ? <img src={oven} alt="oven" /> : null}
        {acessoriesDisplay ? (
          <img src={acessories} alt="acessories" />
        ) : null}
      </div>
      <button className={styles.closeButton} onClick={() => func(false)}>
        <IoIosArrowUp />
      </button>
    </div>
  ) : null;
}

DropDownMenu.propTypes = {
  toggleMenuValue: PropTypes.bool,
  func: PropTypes.func,
  children: PropTypes.node,
  idFromLink: PropTypes.object,
};

export default (DropDownMenu);




