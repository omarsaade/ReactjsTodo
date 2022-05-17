import React from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'



const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };







    return (
        <div className='new-expense'>
            <div>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
            </div>
        </div>
    );
}

export default NewExpense;