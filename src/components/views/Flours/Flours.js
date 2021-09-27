import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Footer from '../../layout/Footer/Footer';
import styles from './Flours.module.scss';
import Slider from '../../features/Slider/SliderContainer.js';
import { filterProducts } from '../../../utils';
import Quote from '../../layout/Quote/Quote';
import TopBar from '../../common/TopBar/TopBar.js';
import OrderNavigation from '../../common/OrderNavigation/OrderNavigationContainer.js';

function Flours({ pictures, products, uploadProducts }) {

  return (
    <div className={styles.flours}>
      <SectionHeader customHeader={pictures.floursHeader} />
      <TopBar open={true} rwd={true} />
      <Slider data={filterProducts(products, 'flour')} />
      <Quote />
      <OrderNavigation/>
      <Footer />
    </div>
  );
}

Flours.propTypes = {
  uploadProducts: PropTypes.func,
  pictures: PropTypes.object,
  products: PropTypes.array,
};

export default Flours;
