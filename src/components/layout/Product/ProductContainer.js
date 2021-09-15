import { connect } from 'react-redux';
import Product from './Product';

const mapStateToProps = (state, props) => ({
  idFromLink: props.match.params.id,
});

export default connect(mapStateToProps)(Product);
