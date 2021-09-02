import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutUs.module.scss';

export const AboutUs = (props) => {
  return (
    <div id="about" className={styles.aboutUs + ' ' + styles.container}>
      <div className={styles.line}/>
      <div>
        <h2> ABOUT US</h2>
      </div>
      <div className={styles.content}>
        <div>
          <img
            src="http://lacon.pl/wp-content/uploads/2015/01/happy-people-friends-400x293.jpg"
            alt="foto.jpg"
          />
          <div className={styles.box} />
        </div>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            molestie vitae mauris in gravida. Sed vel tristique turpis, at
            mollis diam. Sed vitae augue facilisis, commodo risus quis,
            imperdiet sem. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Pellentesque neque leo,
            aliquet eu maximus vitae, vulputate hendrerit ligula. Etiam ultrices
            mauris ac risus posuere, ut laoreet ipsum porta. Nulla facilisi.
            Cras vulputate nunc sem, id maximus est sodales a. Ut porttitor
            porta nulla, nec tempus erat convallis vitae. Maecenas dui est,
            aliquet aliquet sem eu, pellentesque tempor lectus. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Morbi rutrum sed
            ante dignissim tempus. Pellentesque eleifend volutpat enim nec
            viverra.
          </p>
        </div>
      </div>
      <div className={styles.line}/>
    </div>
  );
};

AboutUs.propTypes = {};

export default AboutUs;
