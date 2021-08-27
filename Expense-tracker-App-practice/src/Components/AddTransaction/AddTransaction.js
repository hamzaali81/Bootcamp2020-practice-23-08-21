import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';


export const AddTransaction = () => {
    const transactions = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = (e)=> {
        e.preventDefault();
        const newTransaction = {
        id: Math.floor(Math.random() * 100),
        text: text,
        amount: +amount
        }
        transactions.addTransaction(newTransaction)
    }         
    

    return (
        <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." onChange={(e)=> setText(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"placeholder="Enter amount..." onChange={(e)=> setAmount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
    )
}


