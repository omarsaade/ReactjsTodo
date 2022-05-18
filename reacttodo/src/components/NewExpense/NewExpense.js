import React, { useState } from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'



const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };



    const StartEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }



    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={StartEditingHandler}>Add New Expense</button>}
            {isEditing &&
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler} />}
        </div>
    );
}

export default NewExpense;