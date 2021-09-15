import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionHeader.module.scss';
import { Button } from '@material-ui/core';
import {BsBoxArrowInDown} from 'react-icons/bs';

export const SectionHeader = ({ customHeader, children }) => {
  return (
    <div className={styles.sectionHeader}>
      <img src={customHeader} alt="header" />
      <Button variant="outlined" >
        <a href="#products">Check our products  <BsBoxArrowInDown/></a>
      </Button>
    </div>
  );
};

SectionHeader.propTypes = {
  customHeader: PropTypes.string,
  sectionType: PropTypes.string,
  children: PropTypes.node,
};

export default SectionHeader;
