import React from 'react'
import { GlobalContext } from '../contexts/globalContetx'
import { useContext } from 'react'

const Balance = () => {
    const { balance } =useContext(GlobalContext)
  return (
    <>
          <div className="balance-container">
            <span className="balance-title">Your Balance</span>
             <span className="balance-amount">${balance}</span>
        </div>
    </>
)
}

export default Balance