import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';


function MainLayout({ children }) {
  return <div className={styles.xd}>{children}</div>;
}
MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
