import { connect } from 'react-redux';
import { getProducts } from '../../../redux/dataRedux';
import Search from './Search';

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

export default connect(mapStateToProps)(Search);
