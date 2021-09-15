import { connect } from 'react-redux';
import { delateFromOrder, fetchOrderinProgress, getBasket } from '../../../redux/dataRedux';
import Basket from './Basket';

const mapStateToProps = (state) => ({
  basket: getBasket(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendOrderInProgress: (des) => dispatch(fetchOrderinProgress(des)),
  delateOrder: (name) => dispatch(delateFromOrder(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
