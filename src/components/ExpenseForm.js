import { useState } from "react"
import "../styles/ExpenseForm.css"
const Form = (props) =>{
    let [formController,setFormController] = useState({title:"",amount:"",date:""});
    const changeHandler = (id,event) => {
        if(id === "title"){
            setFormController({
                ...formController,
                title:event.target.value
            });
        }
        else if(id === "amount"){
            setFormController({
                ...formController,
                amount:event.target.value
            })
        }
        else{
            setFormController({
                ...formController,
                date:event.target.value
            })
        }
    }
    const formHandler = (event) =>{
        event.preventDefault();
        
        const newExpense = {
            title:formController.title,
            date:new Date(formController.date),
            amount:formController.amount
        }
        props.onSaveData(newExpense);
        setFormController({title:"",amount:"",date:""});
    }
    return(
        <form onSubmit={formHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={formController.title} onChange={ (event) => {changeHandler('title',event)}}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" min="0.1" value={formController.amount} onChange={(event)=>{changeHandler('amount',event)}}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={formController.date} min="2019-01-01" max="2099-12-31" onChange={(event)=>{changeHandler('date',event)}}></input>
                </div>
            </div>
            <div className="new-expense__action">
                <button>Add Expenses</button>
            </div>
        </form>
    )
}

export default Form