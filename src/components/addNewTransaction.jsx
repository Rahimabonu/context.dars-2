import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/globalContetx";
const AddNewTransaction = () => {
  const [text, setText] = useState();
  const [amount, setAmount] = useState();
  const {setTransactions,transactions}=useContext(GlobalContext);

  const addTransaction = () => {
    const transaction = {
      text: text,
      amount: +amount,
    };
    
    setTransactions([...transactions,transaction])
  };

  return (
    <>
      <div className="add-new-transaction">
        <h2>Add New Transaction</h2>
        <form>
          <div className="form-input">
            <label htmlFor="text">Text</label>
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Enter text"
              id="text"
            />
          </div>
          <div className="form-input">
            <label htmlFor="text">Amount (+ income, - expense)</label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              placeholder="Enter amount"
              id="text"
            />
          </div>
          <button type="button" onClick={addTransaction} className="btn">
            Add Transaction
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNewTransaction;
