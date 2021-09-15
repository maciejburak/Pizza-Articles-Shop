import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Slider from '../../common/Slider/SliderContainer.js';
import Footer from '../../layout/Footer/Footer';
import { filterProducts } from '../../../utils';
import Quote from '../../layout/Quote/Quote';
import TopBar from '../../layout/TopBar/TopBar';
import CheckOrder from '../../common/CheckOrder/CheckOrderContainer';


function Acessories({ pictures, products }) {

  return (
    <div>
      <SectionHeader customHeader={pictures.acessoriesHeader} />
      <TopBar open={true} rwd={true} />
      <Slider data={filterProducts(products, 'acessorie')} />
      <Quote />
      <CheckOrder/>
      <Footer />
    </div>
  );
}

Acessories.propTypes = {
  pictures: PropTypes.object,
  products: PropTypes.array,
};

export default Acessories;
