import { connect } from 'react-redux';
import { deletAllOrder, putOrderDone, getBasket, delateWholeOrder, getDescription } from '../../../redux/orderRedux';
import Order from './Order';

const mapStateToProps = (state) => ({
  basket: getBasket(state),
  description: getDescription(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendOrderDone: () => dispatch(putOrderDone()),
  clearBasket: () => dispatch(deletAllOrder()),
  delateCurrentOrder: (key) => dispatch(delateWholeOrder(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
