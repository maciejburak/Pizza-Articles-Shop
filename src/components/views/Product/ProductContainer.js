import { connect } from 'react-redux';
import { addOrder, getBasket } from '../../../redux/orderRedux';
import Product from './Product';

const mapStateToProps = (state, props) => ({
  idFromLink: props.match.params.id,
  basket: getBasket(state),

});

const mapDispatchToProps = (dispatch) => ({
  addToBucket: (element) => dispatch(addOrder(element)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
