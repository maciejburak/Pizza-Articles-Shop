import { connect } from 'react-redux';
import { getPictures, getProducts } from '../../../redux/dataRedux';
import Ovens from './Ovens';

const mapStateToProps = (state) => ({
  products: getProducts(state),
  pictures: getPictures(state),
});

export default connect(mapStateToProps)(Ovens);
