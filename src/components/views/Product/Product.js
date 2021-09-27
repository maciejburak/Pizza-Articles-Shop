import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OrderNavigation from '../../common/OrderNavigation/OrderNavigation';
import styles from './Product.module.scss';
import TopBar from '../../common/TopBar/TopBar.js';
import Lightbox from '../../features/Lightbox/Lightbox';
import { getNumbersFrom1To100 } from '../../../utils';
import Footer from '../../layout/Footer/Footer';

export const Product = ({ idFromLink, addToBucket, basket }) => {
  const [lightBox, setLightBox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [product, setProduct] = useState('');
  const [headPicture, setHeadPicture] = useState('');
  const [alternativePhotos, setAlternativePhotos] = useState('');
  const [optionValue, setOptionValue] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8000/api//products/${idFromLink}`)
      .then((response) => response.json())
      .then((element) => {
        setProduct(element);
        setHeadPicture(element.photos[0]);
        setAlternativePhotos(element.photos);
      });
  }, []);

  return (
    <div>
      {lightBox ? (
        <Lightbox
          data={alternativePhotos}
          func={setLightBox}
          photo={photoIndex}
        />
      ) : null}
      <TopBar open={true} rwd={true} />
      <div className={styles.container}>
        {
          <div className={styles.product}>
            <div className={styles.productPhoto}>
              <img
                className={styles.headPhoto}
                src={headPicture}
                alt="head photo"
                onClick={() => (setLightBox(true), setPhotoIndex(0))}
              />
              <div className={styles.photosCollection}>
                <img
                  src={alternativePhotos[0]}
                  alt="alt photo"
                  className={styles.adPhoto}
                  onClick={() => (setLightBox(true), setPhotoIndex(0))}
                />
                <img
                  src={alternativePhotos[1]}
                  alt="alt photo"
                  className={styles.adPhoto}
                  onClick={() => (setLightBox(true), setPhotoIndex(1))}
                />
                <img
                  src={alternativePhotos[2]}
                  alt="alt photo"
                  className={styles.adPhoto}
                  onClick={() => (setLightBox(true), setPhotoIndex(2))}
                />
                <img
                  src={alternativePhotos[3]}
                  alt="alt photo"
                  className={styles.adPhoto}
                  onClick={() => (setLightBox(true), setPhotoIndex(3))}
                />
              </div>
            </div>
            <div className={styles.productInfo}>
              <div className={styles.title}>
                <h1>{product.name}</h1>
                <span>COD: {product._id}</span>
              </div>
              <div className={styles.details}>
                <div className={styles.price}>
                  <span>{product.price}</span> $
                </div>
                <div className={styles.options}>
                  <label>Quantity: </label>
                  <select
                    onChange={(e) => setOptionValue(e.target.value)}
                    defaultValue={1}
                  >
                    {getNumbersFrom1To100().map((element) =>
                      element == 1 ? (
                        <option value={element} key={element}>
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
              </div>
              <div className={styles.description}>
                <h3>DESCRIPTION</h3>
                <p>{product.description}</p>
              </div>
              <button
                className={styles.buyBtn}
                onClick={(e) =>
                  addToBucket({
                    name: product.name,
                    value: optionValue,
                    price: product.price,
                    type: product.type,
                  })
                }
              >
                ADD TO CART
              </button>
            </div>
          </div>
        }
      </div>{' '}
      <OrderNavigation basket={basket} />
      <Footer />
    </div>
  );
};

Product.propTypes = {
  idFromLink: PropTypes.string,
  addToBucket: PropTypes.func,
  basket: PropTypes.array,
};

export default Product;
