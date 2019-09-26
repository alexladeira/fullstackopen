import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filter, setNewFilter] = useState("");

  const handleNewName = event => setNewName(event.target.value);

  const handleNewPhoneNumber = event => setNewPhoneNumber(event.target.value);

  const handleFilter = event => setNewFilter(event.target.value);

  const displayPersons = () =>
    filter === ""
      ? persons
      : persons.filter(
          el => el.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
        );

  const addPhone = event => {
    event.preventDefault();
    if (persons.filter(el => el.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newPhoneNumber }));
      setNewName("");
      setNewPhoneNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <span>
        filter <input type="text" onChange={handleFilter} />
      </span>
      <h3>Add new contact</h3>
      <form onSubmit={addPhone}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number:{" "}
          <input value={newPhoneNumber} onChange={handleNewPhoneNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Entries persons={displayPersons()} />
    </div>
  );
};

const Entries = ({ persons }) =>
  persons.map(person => <Entry person={person} key={person.name} />);

const Entry = ({ person }) => (
  <div>
    <span>
      {person.name} - {person.number}
    </span>
  </div>
);

export default App;
