import Expenses from "./components/Expenses/Expenses";
import React, { useState } from 'react';
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
  { id: 'e5', title: 'Tablet', amount: 250, date: new Date(2019, 5, 12) },

];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // console.log(expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    // console.log("in App.js");
    // console.log(expense);
  }




  //under the hood and how is react works
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })

  // );

  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredAmount: event.target.value };
  //   });
  // }






  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
