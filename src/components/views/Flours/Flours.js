import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Bestseller from '../../common/Bestseller/Bestseller';
import Footer from '../../layout/Footer/Footer';
import styles from './Flours.module.scss';
import Slider from '../../common/Slider/SliderContainer.js';
import { filterProducts } from '../../../utils';

function Flours({ uploadProducts, pictures, products }) {
  useEffect(() => {
    uploadProducts();
  }, []);

  return (
    <div className={styles.flours}>
      <SectionHeader
        customHeader={pictures.floursHeader}
        sectionType="Flours"
      />
      <Slider data={filterProducts(products, 'flour')} />
      <Bestseller content={filterProducts(products, 'flour')[2]} />
      <Footer />
    </div>
  );
}

Flours.propTypes = {
  pictures: PropTypes.object,
  products: PropTypes.array,
  uploadProducts: PropTypes.func,
};

export default Flours;
