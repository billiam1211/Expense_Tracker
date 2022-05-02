import React from 'react';
import './ExpensesFilter.css';

// ExpensesFilter is considered a controlled component because the value and logic of this component are both controlled by the parent. This component is only really a UI element
const ExpensesFilter = (props) => {
    // event handler for filter select
    const dropdownChangeHandler = (e) => {
        props.onChangeFilter(e.target.value);
    }

    return ( 
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>

                {/* Passing down change handler function and setting 2-way binding so that the <select> value reflects the state value for the currently selected value for the filtered year as well as the default value that is set in Expenses.js */}
                <select onChange={dropdownChangeHandler} value={props.selectedYear}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div> 
        </div>
    );
};

export default ExpensesFilter;