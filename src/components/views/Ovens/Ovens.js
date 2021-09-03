import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Ovens.module.scss';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Slider from '../../common/Slider/SliderContainer.js';
import Bestseller from '../../common/Bestseller/Bestseller';
import Footer from '../../layout/Footer/Footer';
import { filterProducts } from '../../../utils';

function Ovens({ uploadProducts, pictures, products }) {
  useEffect(() => {
    uploadProducts();
  }, []);


  return (
    <div className={styles.ovens}>
      <SectionHeader
        customHeader= {pictures.ovensHeader}
        sectionType="Ovens"
      />
      <Slider data={filterProducts(products, 'oven')} />
      <Bestseller content = {filterProducts(products, 'oven')[2]}/>
      <Footer />
    </div>
  );
}

Ovens.propTypes = {
  pictures: PropTypes.object,
  products: PropTypes.array,
  uploadProducts: PropTypes.func,
};

export default Ovens;
