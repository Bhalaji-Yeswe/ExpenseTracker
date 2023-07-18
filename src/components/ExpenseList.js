import ExpenseItem from "./ExpenseItem";
import "../styles/ExpenseList.css";

const ExpenseList = (props) =>{
    if(props.items.length===0){
        return <p className="expense-list__fallback">No Expense Found!</p>
    }
    let expenseContent='';
    if(props.items.length>0){
        expenseContent  = props.items.map(item => (
            <ExpenseItem 
                        key={item.id}
                        title={item.title} 
                        amount={item.amount} 
                        date={item.date}>
            </ExpenseItem>
        ))
    }

    return <ul className="expense-list">{expenseContent}</ul>;
}

export default ExpenseList;