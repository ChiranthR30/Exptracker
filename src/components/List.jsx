import React from 'react';
import { GlobalContext } from '../context/gstate';

export const List = (props) => {

  const { deleteTransaction } = React.useContext(GlobalContext);

  function handleClick(){
    deleteTransaction(props.id);
  }
  return (
    <div className='list' onClick={handleClick}>
        <h3>{props.txt}</h3>
        <p style={{color: props.amount>0 ? "green":"red"}}>{props.amount}</p>
    </div>
  )
}
