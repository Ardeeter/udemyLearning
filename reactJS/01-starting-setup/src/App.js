import ExpenseItem from './components/ExpenseItem'

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem id={expenses[0].id} expenseDate={expenses[0].date} expenseTitle={expenses[0].title} expenseAmount={expenses[0].amount}/>
      <ExpenseItem id={expenses[1].id} expenseDate={expenses[1].date} expenseTitle={expenses[1].title} expenseAmount={expenses[1].amount}/>
      <ExpenseItem id={expenses[2].id} expenseDate={expenses[2].date} expenseTitle={expenses[2].title} expenseAmount={expenses[2].amount}/>
      <ExpenseItem id={expenses[3].id} expenseDate={expenses[3].date} expenseTitle={expenses[3].title} expenseAmount={expenses[3].amount}/>
    </div>
  );
}

export default App;