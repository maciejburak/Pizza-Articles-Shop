import { connect } from 'react-redux';
import { getBasket } from '../../../redux/dataRedux';
import CheckOrder from './CheckOrder';

const mapStateToProps = (state) => ({
  basket: getBasket(state),
});

export default connect(mapStateToProps)(CheckOrder);
