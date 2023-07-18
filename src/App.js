import React,{useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450.00,
      date: new Date(2021, 5, 12),
    },
  ];

  let[expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const newExpenseData = (expenseData) =>{
      setExpenses((prevExpenses)=>{
        return [expenseData,...prevExpenses]
      })
  }
  return (
      <div>
        <NewExpense onGetNewExpense={newExpenseData}></NewExpense>
        <Expenses items={expenses}></Expenses>
      </div>
  );
}

export default App;
