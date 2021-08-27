import React from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    const month = props.expenseDate.toLocaleString('en-US', { month: 'long' });

    const day = props.expenseDate.toLocaleString('en-US', { day: '2-digit' })

    const year = props.expenseDate.getFullYear();


    return (
        <>
        <div className="expense-item">
            <ExpenseDate expenseDate={props.expenseDate}/>
            <div className="expense-item__description">
                <h2>{props.expenseTitle}</h2>
            </div>
            <div className="expense-item__price">{props.expenseAmount}</div>
        </div>
        </>
    )
}

export default ExpenseItem;
