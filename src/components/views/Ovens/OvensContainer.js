import React from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/dataRedux';
import Ovens from './Ovens';

const mapStateToProps = (state) => ({
  data: getAll(state),
});

export default connect(mapStateToProps)(Ovens);
