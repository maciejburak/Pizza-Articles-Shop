import React from 'react';
import PropTypes from 'prop-types';
import AboutUs from '../../layout/AboutUs/AboutUs';
import styles from './HomePage.module.scss';
import Footer from '../../layout/Footer/Footer';
import BackgroundVideo from '../../common/BackgroundVideo/BackgroundVideo';
import TopBar from '../../layout/TopBar/TopBar';
import CheckOrder from '../../common/CheckOrder/CheckOrderContainer';

function HomePage() {

  return (
    <div className={styles.homepage}>
      <BackgroundVideo
        videoSource="https://www.youtube.com/watch?v=8qys7dpeiMY"
        blur={2}
      >
        <TopBar open={true} rwd={true}/>
      </BackgroundVideo>
      <AboutUs/>
      <CheckOrder/>
      <Footer/>
    </div>
  );
}

HomePage.propTypes = {
};

export default HomePage;
