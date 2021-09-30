import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Lightbox.module.scss';
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

function Lightbox({ data, func, photo }) {
  const [n, setN] = useState(photo);
  return (
    <div className={styles.lightbox}>
      <AiOutlineClose className={styles.cross} onClick={() => func(false)} />
      <div className={styles.mainPhoto}>
        <button onClick={n != 0 ? () => setN(n - 1) : null}>
          <BiLeftArrowCircle />
        </button>
        <img className={styles.headPhoto} src={data[n]} alt={`photo ${n}`} />
        <button onClick={n != 3 ? () => setN(n + 1) : null}>
          <BiRightArrowCircle />
        </button>
      </div>
    </div>
  );
}

Lightbox.propTypes = {
  data: PropTypes.array,
  func: PropTypes.func,
  photo: PropTypes.number,
};

export default Lightbox;
