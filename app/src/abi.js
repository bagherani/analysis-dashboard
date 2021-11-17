const abi = [
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_data_storage',
        'type': 'address'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'address',
        'name': 'userAddress',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'address',
        'name': 'fromToken',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'address',
        'name': 'toToken',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'amountIn',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'amountOut',
        'type': 'uint256'
      }
    ],
    'name': 'Swapped',
    'type': 'event'
  },
  {
    'inputs': [],
    'name': 'FTM',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'IcurveVyper',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'WFTM',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_token',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_dexRouter',
        'type': 'address'
      }
    ],
    'name': 'allowance',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_token',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_dexRouter',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address[]',
        'name': '_tokens',
        'type': 'address[]'
      },
      {
        'internalType': 'address[]',
        'name': '_dexAddresses',
        'type': 'address[]'
      }
    ],
    'name': 'approveInfinity',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_new_owner',
        'type': 'address'
      }
    ],
    'name': 'changeOwner',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'cuvreTokenCounts',
    'outputs': [
      {
        'internalType': 'uint16',
        'name': '',
        'type': 'uint16'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address payable',
        'name': '_owner',
        'type': 'address'
      }
    ],
    'name': 'destroySmartContract',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'components': [
          {
            'internalType': 'uint256',
            'name': 'minAmountOut',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256',
            'name': 'amountIn',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256[]',
            'name': 'amountsIn',
            'type': 'uint256[]'
          },
          {
            'internalType': 'uint16[][]',
            'name': 'dexs',
            'type': 'uint16[][]'
          },
          {
            'internalType': 'address[][]',
            'name': 'paths',
            'type': 'address[][]'
          },
          {
            'internalType': 'address[][]',
            'name': 'pool',
            'type': 'address[][]'
          },
          {
            'internalType': 'bool',
            'name': 'withdrawFlag',
            'type': 'bool'
          }
        ],
        'internalType': 'struct Proxy.Swap',
        'name': 'route',
        'type': 'tuple'
      }
    ],
    'name': 'exchange',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '_amountOut',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'payable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_token',
        'type': 'address'
      }
    ],
    'name': 'transferToOwner',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '_token_amount',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'payable',
    'type': 'function'
  },
  {
    'stateMutability': 'payable',
    'type': 'receive'
  }
];

export default abi;