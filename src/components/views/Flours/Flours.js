import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Bestseller from '../../common/Bestseller/Bestseller';
import Footer from '../../layout/Footer/Footer';
import styles from './Flours.module.scss';
import Slider from '../../common/Slider/SliderContainer.js';

function Flours({data}) {
  return (
    <div className={styles.flours}>
      <SectionHeader
        customHeader= {data.pictures.floursHeader}
        sectionType="Flours"
      />
      <Slider data={data.flours} />
      <Bestseller content = {data.flours[2]}/>
      <Footer />
    </div>
  );
}

Flours.propTypes = {
  data: PropTypes.object,
};

export default Flours;
