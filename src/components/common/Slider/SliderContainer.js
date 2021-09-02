import React from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../../../redux/dataRedux.js';
import Slider from './Slider.js';

const mapDispatchToProps = (dispatch) => ({
  addToBucket: (element) => dispatch(addOrder(element)),
});

export default connect(null, mapDispatchToProps)(Slider);
