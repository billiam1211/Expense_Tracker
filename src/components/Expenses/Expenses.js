import React, { useState } from 'react';
import ExpensesFilter from './ExpenseFIlter';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');
    
    const filterChangeHandler = (selectedYear) => {
        console.log(`User Selected Year: ${selectedYear}`);
        setFilteredYear(selectedYear);
    }

    // filter the list of items based on the selected year and return a new filtered array
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                {/* Passing down handler to grab the selected year and also passing down the selected year to the filter so it can be correctly set based on state */}
                <ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList  items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;


