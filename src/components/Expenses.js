import React,{useState} from "react";
import "../styles/Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

export default function Expenses(props){
    let[yearSelected,setSelectedYear] = useState("2022");
    const filterChangeHandler = (year) =>{
        setSelectedYear(year);
    }
    
    const filteredExpenses = props.items.filter((expense)=>{
        return expense.date.getFullYear().toString() === yearSelected
    });
    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={yearSelected} onChangeFilter={filterChangeHandler}></ExpenseFilter>
                <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
                <ExpenseList items={filteredExpenses}></ExpenseList>
            </Card>
        </div>
    )
}