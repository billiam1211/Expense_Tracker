import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // creating state 'slices' that can be individually updated
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    // creating a state for the entire component

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // event handler for updating the title
    const titleChangeHandler = (e) => {     
        // access the combined state for the entire component and access the previous state

        // setUserInput((prevState) => {
        //     // use the spread operator to grab the previous state, but only update the desired key/value pair
        //     return {...prevState, enteredTitle: e.target.value}
        // });

        // set state value for the title
        setEnteredTitle(e.target.value);
    }

    // event handler for updating the amount 
    const amountChangeHandler = (e) => {
        setenteredAmount(e.target.value);
    }

    // event handler for updating date
    const dateChangeHandler = (e) => {
        setenteredDate(e.target.value);
    }

    // listens for the form sumit event
    const submitHandler = (e) => {
        // prevent the form from causing a page reload
        e.preventDefault();

        // grab all the values from state
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        
        // call the function that was passed in via props to save expense data in state and pass in the data
        props.onSaveExpenseData(expenseData);

        // reset all the state values back to empty strings once form is submitted
        setEnteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} placeholder='Enter Title' onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} placeholder='Enter value' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2018-01-01' max='2025-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;