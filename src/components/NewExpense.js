import Form from "./ExpenseForm"
import "../styles/NewExpenses.css";

const NewExpense = (props) =>{
    const newExpenseData = (expenseData) =>{
        const newExpense = {...expenseData,id:Math.random().toString()};
        props.onGetNewExpense(newExpense);
    }
    return(
        <div className="new-expenses">
            <Form onSaveData={newExpenseData}></Form>
        </div>
    )
}

export default NewExpense