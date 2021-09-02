import React from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/dataRedux';
import Acessories from './Acessories';

const mapStateToProps = (state) => ({
  data: getAll(state),
});

export default connect(mapStateToProps)(Acessories);
