import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ovens.module.scss';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Slider from '../../common/Slider/SliderContainer.js';
import Bestseller from '../../common/Bestseller/Bestseller';
import Footer from '../../layout/Footer/Footer';

function Ovens({ data }) {
  return (
    <div className={styles.ovens}>
      <SectionHeader
        customHeader= {data.pictures.ovensHeader}
        sectionType="Ovens"
      />
      <Slider data={data.ovens} />
      <Bestseller content = {data.ovens[2]}/>
      <Footer />
    </div>
  );
}

Ovens.propTypes = {
  data: PropTypes.object,
};

export default Ovens;
