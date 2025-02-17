
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <h1 className='title'>Expenst Tracker</h1>
        <div className="balance-container">
          <span className="balance-title">Your Balance</span>
          <span className="balance-amount">$0.00</span>
        </div>
        <div className="income-expense">
          <div className="income">
            <span className="income-title">INCOME</span>
            <span className="income-amount">$0.00</span>
          </div>
          <div className="expense">
            <span className="expense-title">INCOME</span>
            <span className="expense-amount">$0.00</span>
          </div>
        </div>
        <div className="history-container">
          <h2>History</h2>
          <div className="no-transaction">
            <p>No transaction</p>
          </div>
        </div>
        <div className="add-new-transaction">
          <h2>Add New Transaction</h2>
          <form action="#">
            <div className="form-input">
              <label htmlFor="text">Text</label>
              <input type="text" placeholder='Enter text' id='text' />
            </div>
            <div className="form-input">
              <label htmlFor="text">Amount (+ income, - expense)</label>
              <input type="number" placeholder='Enter amount' id='text' />
            </div>
            <button className='btn'>Add Transaction</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
