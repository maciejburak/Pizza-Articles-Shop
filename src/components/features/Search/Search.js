import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.scss';
import { ImCross } from 'react-icons/im';

function Search({ products }) {
  const [searchTerm, setsearchTerm] = useState('');
  return (
    <div className={styles.search}>
      <input
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      {searchTerm != '' ? <ImCross onClick={() => setsearchTerm('')} /> : null}
      <div className={styles.searchinResults}>
        {products
          .filter((product) => {
            if (searchTerm == '') {
              return null;
            } else if (
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return product;
            }
          })
          .map((item) => (
            <a key={item._id} href={`/products/${item._id}`}>
              {item.name}
            </a>
          ))}
      </div>
    </div>
  );
}

Search.propTypes = {
  products: PropTypes.array,
};

export default Search;
