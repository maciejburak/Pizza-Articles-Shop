import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ovens.module.scss';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Slider from '../../features/Slider/SliderContainer.js';
import Footer from '../../layout/Footer/Footer';
import { filterProducts } from '../../../utils';
import Quote from '../../layout/Quote/Quote';
import TopBar from '../../common/TopBar/TopBar.js';
import OrderNavigation from '../../common/OrderNavigation/OrderNavigationContainer.js';


function Ovens({ pictures, products }) {

  return (
    <div className={styles.ovens}>
      <SectionHeader customHeader= {pictures.ovensHeader}/>
      <TopBar open={true}  rwd={true}/>
      <Slider data={filterProducts(products, 'oven')} />
      <Quote/>
      <OrderNavigation/>
      <Footer />
    </div>
  );
}

Ovens.propTypes = {
  pictures: PropTypes.object,
  products: PropTypes.array,
};

export default Ovens;
