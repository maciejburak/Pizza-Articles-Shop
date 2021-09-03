import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Slider from '../../common/Slider/SliderContainer.js';
import Bestseller from '../../common/Bestseller/Bestseller';
import Footer from '../../layout/Footer/Footer';
import { filterProducts } from '../../../utils';

function Acessories({ uploadProducts, pictures, products }) {

  useEffect(() => {
    uploadProducts();
  }, []);


  return (
    <div>
      <SectionHeader
        customHeader= {pictures.acessoriesHeader}
        sectionType="Acessories"
      />
      <Slider data ={filterProducts(products, 'acessorie')} />
      <Bestseller content = {filterProducts(products, 'acessorie')[3]} />
      <Footer />
    </div>
  );
}

Acessories.propTypes = {
  pictures: PropTypes.object,
  products: PropTypes.array,
  uploadProducts: PropTypes.func,
};

export default Acessories;
