import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import TopBar from '../TopBar/TopBar';

export const Product = ({ idFromLink }) => {
  const [product, setProduct] = useState('');
  useEffect(() => {
    fetch(`http://localhost:8000/api//products/${idFromLink}`)
      .then((response) => response.json())
      .then((element) => {
        setProduct(element);
      });
  }, []);
  return (
    <div className={styles.container}>
      <TopBar open={true} rwd={true} />
      {
        <div className={styles.product}>
          <div className={styles.productPhoto}>
            <img src={product.url} alt="head photo" />
          </div>
          <div className={styles.productInfo}>
            <div className={styles.title}>
              <h1>{product.name}</h1>
              <span>COD: {product._id}</span>
            </div>
            <div className={styles.price}>
              <span>{product.price}</span> $
            </div>
            <div className={styles.description}>
              <h3>DESCRIPTION</h3>
              <p>{product.description}</p>
            </div>
            <button className={styles.buyBtn}>ADD TO CART</button>
          </div>
        </div>
      }
    </div>
  );
};

Product.propTypes = {
  idFromLink: PropTypes.string,
};
export default Product;
