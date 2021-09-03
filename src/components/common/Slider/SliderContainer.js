import React from 'react';
import { connect } from 'react-redux';
import { fetchOrder } from '../../../redux/dataRedux.js';
import Slider from './Slider.js';

const mapDispatchToProps = (dispatch) => ({
  addToBucket: (element) => dispatch(fetchOrder(element)),
});

export default connect(null, mapDispatchToProps)(Slider);
