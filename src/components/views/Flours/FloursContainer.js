import { connect } from 'react-redux';
import {  getPictures, getProducts } from '../../../redux/dataRedux';
import Flours from './Flours';

const mapStateToProps = (state) => ({
  products: getProducts(state),
  pictures: getPictures(state),
});

export default connect(mapStateToProps)(Flours);
