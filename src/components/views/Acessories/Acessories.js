import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Slider from '../../common/Slider/SliderContainer.js';
import Bestseller from '../../common/Bestseller/Bestseller';
import Footer from '../../layout/Footer/Footer';

function Acessories({ data }) {
  return (
    <div>
      <SectionHeader
        customHeader= {data.pictures.acessoriesHeader}
        sectionType="Acessories"
      />
      <Slider data ={data.acessories} />
      <Bestseller content = {data.acessories[3]} />
      <Footer />
    </div>
  );
}

Acessories.propTypes = {
  data: PropTypes.object,
};

export default Acessories;
