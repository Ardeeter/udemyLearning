import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <>
    <Card className="expenses">
        <ExpenseItem id={props.expenses[0].id} expenseDate={props.expenses[0].date} expenseTitle={props.expenses[0].title} expenseAmount={props.expenses[0].amount}/>
        <ExpenseItem id={props.expenses[1].id} expenseDate={props.expenses[1].date} expenseTitle={props.expenses[1].title} expenseAmount={props.expenses[1].amount}/>
        <ExpenseItem id={props.expenses[2].id} expenseDate={props.expenses[2].date} expenseTitle={props.expenses[2].title} expenseAmount={props.expenses[2].amount}/>
        <ExpenseItem id={props.expenses[3].id} expenseDate={props.expenses[3].date} expenseTitle={props.expenses[3].title} expenseAmount={props.expenses[3].amount}/>
    </Card>
    </>
  )
}

export default Expenses
