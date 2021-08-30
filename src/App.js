import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Daily Lunch',
      amount: 50,
      date: new Date(2021, 2, 1)
    },
    {
      id: 'e2',
      title: 'Daily Dinner',
      amount: 50,
      date: new Date(2021, 2, 1)
    },
    {
      id: 'e3',
      title: 'Hair Cut',
      amount: 50,
      date: new Date(2021, 2, 2)
    },
    {
      id: 'e4',
      title: 'Soda',
      amount: 50,
      date: new Date(2021, 2, 2)
    },
  ];


  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>);
}

export default App;