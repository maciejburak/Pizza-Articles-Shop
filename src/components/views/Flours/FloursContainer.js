import React from 'react';
import { connect } from 'react-redux';
import { fetchPublished, getPictures, getProducts } from '../../../redux/dataRedux';
import Flours from './Flours';

const mapStateToProps = (state) => ({
  products: getProducts(state),
  pictures: getPictures(state),
});

const mapDispatchToProps = (dispatch) => ({
  uploadProducts: () => dispatch(fetchPublished()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Flours);
