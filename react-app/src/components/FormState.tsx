import { FormEvent, useState } from 'react';

const FormState = () => {
  const [person, setPerson] = useState({
    name: '',
    age: ''
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="stateName" className="form-label">
          Name
        </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
          }}
          value={person.name}
          id="stateName"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="stateAge" className="form-label">
          Age
        </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, age: event.target.value });
          }}
          value={person.age}
          id="stateAge"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormState;
