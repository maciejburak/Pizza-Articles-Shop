import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Footer from '../../layout/Footer/Footer';
import Slider from '../../features/Slider/SliderContainer.js';
import { filterProducts } from '../../../utils';
import Quote from '../../layout/Quote/Quote';
import TopBar from '../../common/TopBar/TopBar.js';
import OrderNavigation from '../../common/OrderNavigation/OrderNavigationContainer.js';


function Acessories({ pictures, products }) {

  return (
    <div>
      <SectionHeader customHeader={pictures.acessoriesHeader} />
      <TopBar open={true} rwd={true} />
      <Slider data={filterProducts(products, 'acessorie')} />
      <Quote />
      <OrderNavigation/>
      <Footer />
    </div>
  );
}

Acessories.propTypes = {
  pictures: PropTypes.object,
  products: PropTypes.array,
};

export default Acessories;
