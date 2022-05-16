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

    const hideForm = (el) => {
        el.target.style.display = "none";
        if (el.target.style.display == "none") {
        }

    }
    //ah




    return (<div className='new-expense'>
        <button onClick={hideForm}>Add New Expense</button>
        <div style={{ display: 'none' }} >
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    </div >
    );
}

export default NewExpense;