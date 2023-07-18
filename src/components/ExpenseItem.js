import React from "react";
import "../styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props){
    return(
        <Card className="expense-item">
            <div className="expense-item__description">
                <ExpenseDate date={props.date}></ExpenseDate>
            </div>
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </Card>
    )
}

export default ExpenseItem;