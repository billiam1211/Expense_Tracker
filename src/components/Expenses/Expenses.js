import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFIlter';
import Card from '../UI/Card';
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
                {/* If filtered expenses are 0, then return error message */}
                {filteredExpenses.length === 0 && <p className="filtered-error">No expenses found</p>}
                {/* If filtered expenses exist, return the mapped list */}
                {filteredExpenses.length > 0 && filteredExpenses.map((expense) => 
                    // whem mapping out components, it's always best practice to add in a unique key to the mapped element
                    <ExpenseItem 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                        key={expense.id} />
                )}
            </Card>
        </div>
    );
}

export default Expenses;


