import { connect } from 'react-redux';
import { deleteProductsFromBasket, fetchCurrentOrder, fetchOrderDone, getBasket, delateWholeOrder } from '../../../redux/dataRedux';
import Order from './Order';

const mapStateToProps = (state) => ({
  basket: getBasket(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendOrderDone: () => dispatch(fetchOrderDone()),
  clearBasket: () => dispatch(deleteProductsFromBasket()),
  currentOrder: ()=> dispatch(fetchCurrentOrder()),
  delateCurrentOrder: (key) => dispatch(delateWholeOrder(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
