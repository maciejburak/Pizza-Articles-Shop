import React from 'react';
import PropTypes from 'prop-types';
import styles from './BackgroundVideo.module.scss';
import AdvVideo from '../../../video/film.mp4';

const BackgroundVideo = ({ children }) => {
  return (
    <>
      <div className="container">
        <video muted={true} autoPlay={true} loop className={styles.video}>
          <source src={AdvVideo} type="video/mp4" />
        </video>
        {children}
      </div>
    </>
  );
};

BackgroundVideo.propTypes = {
  children: PropTypes.node,
};

export default BackgroundVideo;
