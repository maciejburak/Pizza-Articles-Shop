import React from 'react';
import Header from '../../layout/Header/Header';
import AboutUs from '../../layout/AboutUs/AboutUs';
import styles from './HomePage.module.scss';
import Footer from '../../layout/Footer/Footer';
import BackgroundVideo from '../../common/BackgroundVideo/BackgroundVideo';
import TopBar from '../../layout/TopBar/TopBar';

function HomePage() {
  return (
    <div className={styles.homepage}>
      <BackgroundVideo
        videoSource="https://www.youtube.com/watch?v=8qys7dpeiMY"
        blur={2}
      >
        <TopBar />
      </BackgroundVideo>
    </div>
  );
}

export default HomePage;
