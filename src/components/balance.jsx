import React,{useContext} from 'react';
import { GlobalContext } from '../context/gstate';


export const Balance = () => {
  

  const { transactions } = useContext(GlobalContext);

  const arr = transactions.map((t)=>{
    return t.amount;
  });
  const total = arr.reduce((accumulator,x)=>(accumulator+=x),0);

  return (
    <div className='balance-screen'>
        <h2>Balance</h2>
        <h1>$290.00</h1>
    </div>
  )
}

