import { connect } from 'react-redux';
import { deletAllOrder, putOrderDone, getBasket, delateWholeOrder, getDescription } from '../../../redux/orderRedux';
import { OrderForm } from './OrderForm';

const mapStateToProps = (state) => ({
  basket: getBasket(state),
  description: getDescription(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendOrderDone: (personalData) => dispatch(putOrderDone(personalData)),
  clearBasket: () => dispatch(deletAllOrder()),
  delateCurrentOrder: () => dispatch(delateWholeOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);