import { connect } from 'react-redux';
import { getBasket, postOrderinProgress } from '../../../redux/orderRedux';
import OrderNavigation from './OrderNavigation';

const mapStateToProps = (state) => ({
  basket: getBasket(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendOrderInProgress: (des) => dispatch(postOrderinProgress(des)),
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderNavigation);
