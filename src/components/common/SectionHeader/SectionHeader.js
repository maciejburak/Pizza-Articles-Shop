import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../layout/TopBar/TopBar';
import styles from './SectionHeader.module.scss';

export const SectionHeader = ({ customHeader, sectionType }) => {
  return (
    <div className={styles.sectionHeader}>
      <img src={customHeader} alt="header" />
      <TopBar />
      <h1 className={styles.sectionName}>{sectionType}</h1>
    </div>
  );
};

SectionHeader.propTypes = {
  customHeader: PropTypes.string,
  sectionType: PropTypes.string,
};

export default SectionHeader;
