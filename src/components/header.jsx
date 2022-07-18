import React from 'react'
import "./comps.css"

export const Header = () => {
  return (
    <div className='nav'>
        <h1>Expense Tracker</h1>
        <img className="img1"src={require('./budget.png')} alt=''/>
    </div>
  )
}
