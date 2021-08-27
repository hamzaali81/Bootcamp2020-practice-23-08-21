import React, {useContext} from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

// console.log(GlobalContext);
const Transaction = ({transaction}) => {
    const transactions = useContext(GlobalContext);
    console.log('transactions****',transactions);
    
   
   const moneyFormatter = (num) => {
       let p = num.toFixed(2).split('.')
       return (
           '$' +
           p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
       )
   };

   const sign = transaction.amount < 0 ? '-': '+';
    return (
        <div>
          <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => transactions.deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
      <li className='minus'>
      {} <span></span><button className="delete-btn">x</button>
    </li>
        </div>
    )
}

export default Transaction;
