import React from 'react';
import AboutUs from '../../layout/AboutUs/AboutUs';
import styles from './HomePage.module.scss';
import Footer from '../../layout/Footer/Footer';
import OrderNavigation from '../../common/OrderNavigation/OrderNavigationContainer.js';
import BackgroundVideo from '../../layout/BackgroundVideo/BackgroundVideo';
import TopBar from '../../common/TopBar/TopBar.js';

function HomePage() {

  return (
    <div className={styles.homepage}>
      <BackgroundVideo
        blur={2}
      >
        <TopBar open={true} rwd={true}/>
      </BackgroundVideo>
      <AboutUs/>
      <OrderNavigation/>
      <Footer/>
    </div>
  );
}

export default HomePage;
