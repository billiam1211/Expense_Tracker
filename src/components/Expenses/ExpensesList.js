import React from 'react'; 
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

    // conditionally render content if filtered expenses exist 
    if (props.items.length === 0) {
       return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => {
                // add in a unique key to mapped components
                return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
            })}
        </ul>
    )
}

export default ExpensesList;