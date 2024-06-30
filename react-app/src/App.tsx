import userService, { User } from './services/user-service';
import useUsers from './hooks/useUSers';

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + '!' };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: 'Marco' };
    const originalUsers = [...users];
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      {!isLoading && (
        <>
          <button className="btn btn-primary mb-3" onClick={() => addUser()}>
            Add
          </button>
          <ul className="list-group">
            {users.map((user) => (
              <li
                key={user.id}
                className="list-group-item d-flex justify-content-between"
              >
                {user.name}
                <div>
                  <button
                    className="btn btn-outline-secondary mx-1"
                    onClick={() => updateUser(user)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteUser(user)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

// function App() {
// const [category, setCategory] = useState('');

// return (
//   <div>
//     <select
//       className="form-select"
//       onChange={(event) => setCategory(event.target.value)}
//     >
//       <option value=""></option>
//       <option value="Clothing">Clothing</option>
//       <option value="Household">Household</option>
//     </select>
//     <ProductList category={category} />
//   </div>
// );

// const ref = useRef<HTMLInputElement>(null);

// useEffect(() => {
//   if (ref.current) ref.current.focus();
// });

// useEffect(() => {
//   document.title = 'My App';
// });

// return (
//   <div>
//     <input ref={ref} type="text" className="form-control" />
//   </div>
// );

// const [expenses, setExpenses] = useState([
//   {
//     id: 1,
//     description: 'aaa',
//     amount: 10,
//     category: 'Utilities'
//   },
//   {
//     id: 2,
//     description: 'bbb',
//     amount: 6,
//     category: 'Utilities'
//   },
//   {
//     id: 3,
//     description: 'ccc',
//     amount: 23,
//     category: 'Groceries'
//   },
//   {
//     id: 4,
//     description: 'ddd',
//     amount: 3,
//     category: 'Utilities'
//   }
// ]);

// const [selectedCategory, setSelectedCategory] = useState('');

// //Not need a state as it is computed from existing state variables
// const visibleExpenses = selectedCategory
//   ? expenses.filter((e) => e.category === selectedCategory)
//   : expenses;

// return (
//   <div>
//     <div className="mb-5">
//       <ExpenseForm
//         onSubmit={(newExpense) =>
//           setExpenses([
//             ...expenses,
//             {
//               ...newExpense,
//               id: expenses.length ? expenses[expenses.length - 1].id + 1 : 0
//             }
//           ])
//         }
//       />
//     </div>

//     <div className="mb-3">
//       <ExpenseFilter
//         onSelectCategory={(category) => setSelectedCategory(category)}
//       />
//     </div>

//     <ExpenseList
//       expenses={visibleExpenses}
//       onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
//     />
//   </div>
// );

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
// }

export default App;
