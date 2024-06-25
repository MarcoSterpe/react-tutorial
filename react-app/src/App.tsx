import { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'aaa',
      amount: 10,
      category: 'Utilities'
    },
    {
      id: 2,
      description: 'bbb',
      amount: 6,
      category: 'Utilities'
    },
    {
      id: 3,
      description: 'ccc',
      amount: 23,
      category: 'Groceries'
    },
    {
      id: 4,
      description: 'ddd',
      amount: 3,
      category: 'Utilities'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');

  //Not need a state as it is computed from existing state variables
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              {
                ...newExpense,
                id: expenses.length ? expenses[expenses.length - 1].id + 1 : 0
              }
            ])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );

  // const cities = [
  //   'New York',
  //   'San Francisco',
  //   'Tokyo',
  //   'Paris',
  //   'Rome',
  //   'London'
  // ];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // const [showAlert, setShowAlert] = useState(false);
  // return (
  //   <div>
  //     {showAlert && (
  //       <Alert onClose={() => setShowAlert(false)}>
  //         Hello <span> World! </span>
  //       </Alert>
  //     )}
  //     <Button cssClass="danger" onClick={() => setShowAlert(true)}>
  //       Test button
  //     </Button>
  //     <ListGroup
  //       items={cities}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //     <Form />
  //     <FormState />
  //     <FormHook />
  //   </div>
  // );
}

export default App;
