import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/global.scss';
import Carousel from 'react-elastic-carousel';
import styles from './Slider.module.scss';
import { Button } from '@material-ui/core';

function Slider({ data, addToBucket}) {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <Carousel
        enableAutoPlay
        autoPlaySpeed={7000}
        itemPadding={[10, 50]}
        itemsToShow={2}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
      >
        {data.map((item) => (
          <div key={item.name} className={styles.sliderElement}>
            <img src={item.url} />
            <h2>Product Name</h2>
            <Button variant="contained" color="primary" onClick={(e)=>(addToBucket(item))} >
              Add to bucket
            </Button>
          </div>
        ))}
      </Carousel>
      <div className={styles.line}></div>
    </div>
  );
}

Slider.propTypes = {
  data: PropTypes.array,
  addToBucket: PropTypes.func,
};

export default Slider;
//onClick={(item) => addToBucket(item)} 