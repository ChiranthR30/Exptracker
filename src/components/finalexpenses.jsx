import React from 'react'
import "./comps.css";
import { GlobalContext } from '../context/gstate';

export const Finalexpenses = () => {

  function caller(t){
    return t.amount
  }
  const { transactions } = React.useContext(GlobalContext);

  const arr =transactions.map(caller);
  
  const income = arr.filter(item=>item>0).reduce((a,x)=>(a+=x),0).toFixed(2);
  const exp = arr.filter(item=>item<0).reduce((a,x)=>(a+=x),0).toFixed(2)

  return (
    <div className='final'>
        <div className='left'>
            <h2>Income</h2>
            <p>$300.00</p>
        </div>
        <div className='right'>
            <h2>Expenses</h2>
            <p>$10.00</p>
        </div>
    </div>
  )
}
