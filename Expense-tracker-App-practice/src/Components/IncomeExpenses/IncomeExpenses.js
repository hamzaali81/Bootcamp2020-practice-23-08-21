import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';


//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
};

const IncomeExpenses = () => {
  const {transactions}= useContext(GlobalContext);
  console.log('transactions***',transactions);
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );
   
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">${expense}</p>
        </div>
      </div>
    )
}

export default IncomeExpenses;
