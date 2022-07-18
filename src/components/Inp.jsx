import React from 'react';
import "./comps.css";
import { GlobalContext } from '../context/gstate';

export const Inp = () => {

  const [text,setText] = React.useState('');
  const [num,setNum] = React.useState(0);

  const {addTransaction} = React.useContext(GlobalContext);

  function handleNumChange(event){
    setNum(event.target.value);
  }

  function handleTextChange(e){
    setText(e.target.value);
  }

  function handleClick(event){
    event.preventDefault();

    const newTransaction = {
      id : Math.floor(Math.random()*100000000),
      text:text,
      amount:num
    }

    addTransaction(newTransaction);
  }
  return (
    <div className='inp'>
        <p className='para'>Expense Object:</p>
        <input type="text" value={text} placeholder="Description" onChange={handleTextChange}/>
        <p>Amount spent</p>
        <input type="number" value={num} placeholder="Amount" onChange={handleNumChange}/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}
