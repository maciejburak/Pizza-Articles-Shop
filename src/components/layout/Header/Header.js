import React from 'react';
import BackgroundVideo from '../../common/BackgroundVideo/BackgroundVideo';
import TopBar from '../../common/TopBar/TopBar.js';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.main}>
      <BackgroundVideo
        videoSource="https://www.youtube.com/watch?v=8qys7dpeiMY"
      >
        <TopBar />
      </BackgroundVideo>
    </div>
  );
}

export default Header;
