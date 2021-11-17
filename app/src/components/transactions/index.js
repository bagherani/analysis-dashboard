import PropTypes from 'prop-types';
import React from 'react';
import { useEffect, Fragment, useRef } from 'react';
import Link from '@mui/material/Link';
import Title from '../title';
import { connect } from 'react-redux';
import { insertTransactions, setIsLoading } from '../../actions/transaction-actions';
import Web3 from 'web3';
import { WS_ENDPOINT, CONTRACT_ADDRESS } from '../../constants';
import abi from '../../abi';
import { DataGrid } from '@mui/x-data-grid';

function preventDefault(event) {
  event.preventDefault();
}

function Transactions({ setIsLoading, insertTransactions, isLoading, list }) {
  const contractRef = useRef(null);

  useEffect(() => {
    let subscriptionHandler = null;

    if (contractRef.current == null) {
      let w3 = new Web3(WS_ENDPOINT);
      contractRef.current = new w3.eth.Contract(abi, CONTRACT_ADDRESS);
      const contract = contractRef.current;

      setIsLoading(true);
      contract.getPastEvents('Swapped', {
        fromBlock: '20735669',

      }, (error) => {
        if (error)
          console.log(error);
      })
        .then((events) => {
          console.log(events);
          insertTransactions(events);
        }).catch(ex => {
          console.log(ex);
        });

      subscriptionHandler = contract.events.Swapped((error) => {
        if (error) {
          console.log(error);
        }
      })
        .on('connected', function (subscriptionId) {
          console.log('subscriptionId:', subscriptionId);
        })
        .on('data', function (blockHeader) {
          console.log(blockHeader);
          insertTransactions(blockHeader);
        })
        .on('error', console.error);
    }

    return () => {
      if (subscriptionHandler && typeof subscriptionHandler.unsubscribe === 'function')
        subscriptionHandler.unsubscribe((/*error, success*/) => { });
    };
  });

  const columns = [
    { field: 'blockNumber', headerName: 'Block Number', width: 150 },
    {
      field: 'userAddress', headerName: 'User Address', width: 150,
      valueGetter: (params) => {
        if (params.row)
          return params.row.returnValues['userAddress'];
        return '';
      }
    },
    {
      field: 'fromToken', headerName: 'From Token', width: 150,
      valueGetter: (params) => {
        if (params.row)
          return params.row.returnValues['fromToken'];
        return '';
      }
    },
    {
      field: 'toToken', headerName: 'To Token', width: 150,
      valueGetter: (params) => {
        if (params.row)
          return params.row.returnValues['toToken'];
        return '';
      }
    },
    {
      field: 'amount', headerName: 'Amount', width: 200,
      valueGetter: (params) => {
        if (params.row)
          return params.row.returnValues['amountOut'];
        return '';
      }
    },
    {
      field: 'transactionHash', headerName: 'Transaction Hash',
      flex: 1
    },
  ];

  return (
    <Fragment>
      <Title>Recent Transactions</Title>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          sortModel={[{ field: 'blockNumber', sort: 'desc' }]}
          loading={isLoading}
          rows={list}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </div>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </Fragment>
  );
}

Transactions.propTypes = {
  isLoading: PropTypes.bool,
  list: PropTypes.array,
  insertTransactions: PropTypes.func,
  setIsLoading: PropTypes.func
};

export default connect(
  state => state.transactions,
  dispatch => ({
    insertTransactions: (data) => dispatch(insertTransactions(data)),
    setIsLoading: (data) => dispatch(setIsLoading(data)),
  })
)(Transactions);