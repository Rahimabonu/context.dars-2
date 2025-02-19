import React from 'react'

const Transaction = ({text,amount}) => {
  return (
    <>
        <div className="transaction">
            <span>{text}</span>
            <span>${amount}</span>
        </div>
    </>
)
}

export default Transaction