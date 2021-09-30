import { connect } from 'react-redux';
import {
  delateFromOrder,
  postOrderinProgress,
  getBasket,
} from '../../../redux/orderRedux';
import Basket from './Basket';

const mapStateToProps = (state) => ({
  basket: getBasket(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendOrderInProgress: (des) => dispatch(postOrderinProgress(des)),
  delateOrder: (name) => dispatch(delateFromOrder(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
