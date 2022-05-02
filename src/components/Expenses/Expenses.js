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

    return (
        <div>
            <Card className="expenses">
                {/* Passing down handler to grab the selected year and also passing down the selected year to the filter so it can be correctly set based on state */}
                <ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear} />
                {props.items.map((expense) => 
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


