import './app.scss';
import React from 'react';
import Web3 from 'web3';
import abi from '../abi';
import User from './user';

class App extends React.Component {
  contract;

  constructor() {
    super()
    this.state = { val: 1 }
    // this.web3 = new Web3('wss://wsapi.fantom.network/');
    // this.contract = new this.web3.eth.Contract(abi, '0x9751AF61060DfC101B424110926f806F3777E166');
  }

  componentDidMount() {
    // console.log(this.contract);
    // this.contract.events.Swapped({}, (error, event) => { })
    //   .on("connected", function (subscriptionId) {
    //     console.log('connected ', subscriptionId);
    //   })
    //   .on('data', function (event) {
    //     console.log('event', event); // same results as the optional callback above
    //   })
    //   .on('changed', function (event) {
    //     // remove event from local database
    //     console.log('change:', event);
    //   })
    //   .on('error', function (error, receipt) {
    //     // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
    //     console.log(error, receipt);
    //   });

  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="App" >
        hi
        <br />
        <User />
      </div>
    );
  }
}

export default App;
