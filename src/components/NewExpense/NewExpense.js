import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseData = (enteredExpenseData) => {
        
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 100000000).toString(),
        }

        // pass data up to the app.js component 
        props.onAddExpense(expenseData);
    }


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>
    );
}

export default NewExpense;