import React from 'react';
// import initialState from '../../initial-state';
import { getAll } from '../../actions/transaction-actions';
import { connect } from 'react-redux';

class User extends React.Component {
  render() {
    return <>this is user</>;
  }
}

export default connect(
  // state => initialState.transactions,
  dispatch => ({
    getAll: id => dispatch(getAll(id))
  })
)(User);