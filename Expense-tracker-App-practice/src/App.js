import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Balance } from './Components/Balance/Balance';
import IncomeExpenses from './Components/IncomeExpenses/IncomeExpenses';
import TransactionList from './Components/TransactionList.js/TransactionList';
import {AddTransaction} from './Components/AddTransaction/AddTransaction';
import { GlobalProvider } from './Context/GlobalContext';

const App = () => {
  return (
    <div className="container">
      <Header />
     <GlobalProvider>
     <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
     </GlobalProvider>

    </div>
  )
}

export default App;
