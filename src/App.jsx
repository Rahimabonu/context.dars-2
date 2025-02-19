
import './App.css'
import Balance from './components/balance'
import Expense from './components/expense'
import Income from './components/icome'
import History from './components/history'
import AddNewTransaction from './components/addNewTransaction'

function App() {

  return (
    <>
    
      <div className="container">
        <h1 className='title'>Expenst Tracker</h1>
        <Balance/>
        <div className="income-expense">
          <Income/>
          <Expense/>
        </div>
        <History/>
        <AddNewTransaction/>
      </div>
    </>
  )
}

export default App
