import './Expenses.css';
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);//2022 example

    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });





    return (
        <div>
            <Card className="expenses">
                {/* //filter */}
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                <ExpensesList items={filteredExpenses} />
                {/* {[<ExpensesFilter />, 8, 18, 32]} */}
            </Card>
        </div>
    );
}

export default Expenses;