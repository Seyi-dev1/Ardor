import React from 'react'

import './transactions.scss'
import TransactionsTable from './transactionsTable'

const Transactions = () => {
  return (
    <div className='transactions'>
    <div className="title"> <h2>Transactions</h2></div>
    <TransactionsTable/>
    </div>
  )
}

export default Transactions