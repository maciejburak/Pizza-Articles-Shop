import React from 'react';
import { connect } from 'react-redux';
import { getBasket } from '../../../redux/dataRedux';
import Basket from './Basket';

const mapStateToProps = (state) => ({
  basket: getBasket(state),
});

export default connect(mapStateToProps)(Basket);
