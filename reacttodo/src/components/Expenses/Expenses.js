import './Expenses.css';
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);//2022 example

    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return (
        <div>
            <Card className="expenses">
                {/* //filter */}
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                {filteredExpenses.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />
                )}
                {/* {[<ExpensesFilter />, 8, 18, 32]} */}
            </Card>
        </div>
    );
}

export default Expenses;