import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/global.scss';
import Carousel from 'react-elastic-carousel';
import styles from './Slider.module.scss';
import { getNumbersFrom1To100, randerItems } from '../../../utils';

function Slider({ data, addToBucket }) {
  const [optionValue, setOptionValue] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  return (
    <div id="products" className={styles.slider}>
      <Carousel
        itemPadding={[10, 50]}
        itemsToShow={randerItems(width)}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
      >
        {data.map((item) => (
          <div key={item._id} className={styles.sliderElement}>
            <img src={item.photos[0]} />
            <div className={styles.description}>
              <div className={styles.priceAndName}>
                <a href={`/products/${item._id}`}>{item.name}</a>
                <p>price: {item.price}$</p>
              </div>
              <div className={styles.options}>
                <label>Quantity: </label>
                <select
                  onChange={(e) => setOptionValue(e.target.value)}
                  defaultValue={1}
                >
                  {getNumbersFrom1To100().map((element) =>
                    element == 1 ? (
                      <option value={element}  key={element}>
                        {element}
                      </option>
                    ) : (
                      <option value={element} key={element}>
                        {element}
                      </option>
                    )
                  )}
                </select>
              </div>
              <button onClick={(e)=>(addToBucket({name: item.name, value: optionValue, price: item.price, type: item.type}))} >
                + ADD TO BASKET
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

Slider.propTypes = {
  data: PropTypes.array,
  addToBucket: PropTypes.func,
};

export default Slider;
//onClick={(item) => addToBucket(item)}
