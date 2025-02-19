import { createContext, useState } from "react";

const data ={
    balance: 0,
    income: 0,
    expense: 0,
    transactions: [],
}
const GlobalContext = createContext(data);
const GlobalProvider = ({children}) => {
    const [balance, setBalance] =useState(15);
    const [income, setIncome] =useState(0);
    const [expense, setExpens] =useState(0);
    const [transactions, setTransactions] =useState([]);


    return (
        <GlobalContext.Provider value={{
            transactions,setTransactions,
            expense,setExpens,
            income,setIncome,
            balance,setBalance,
        }}>
            {children}

        </GlobalContext.Provider>
    )

}
export{GlobalContext,GlobalProvider}