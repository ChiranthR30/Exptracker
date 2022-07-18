import React from 'react';
import { List } from './List';
import { GlobalContext } from '../context/gstate';

export const Budgetlist = () => {

  function caller(t){
    return <List txt={t.text} amount={t.amount}/>
  }

  
  const { tranactions } = React.useContext(GlobalContext);
  return (
        <div>
            {tranactions.map(caller)}
        </div>

  )
}




