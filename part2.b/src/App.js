import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: "5521999999999" }
  ]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const handleNewName = event => setNewName(event.target.value);

  const handleNewPhoneNumber = event => setNewPhoneNumber(event.target.value);

  const addPhone = event => {
    event.preventDefault();
    if (persons.filter(el => el.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(
        persons.concat({ name: newName, phoneNumber: newPhoneNumber })
      );
      setNewName("");
      setNewPhoneNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Entries persons={persons} />
    </div>
  );
};

const Entries = ({ persons }) =>
  persons.map(person => <Entry person={person} key={person.name} />);

const Entry = ({ person }) => (
  <div>
    <span>
      {person.name} - {person.phoneNumber}
    </span>
  </div>
);

export default App;
