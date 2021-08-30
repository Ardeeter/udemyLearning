import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.expenseTitle); 
    console.log('ExpenseItem evaulated by React');

    // const month = props.expenseDate.toLocaleString('en-US', { month: 'long' });

    // const day = props.expenseDate.toLocaleString('en-US', { day: '2-digit' })

    // const year = props.expenseDate.getFullYear();

    const clickHandler = () => {
        setTitle("Updated")
        console.log(title); 
    }

 
    return (
        <>
        <Card className="expense-item">
            <ExpenseDate expenseDate={props.expenseDate}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
            {/* </div> */}
            <div className="expense-item__price">{props.expenseAmount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        </>
    )
}

export default ExpenseItem;
