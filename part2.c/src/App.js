import React, { useState, useEffect } from "react";
import "./App.css";
import Entries from "./components/Entries";
import Filter from "./components/Filter";
import Form from "./components/Form";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filter, setNewFilter] = useState("");

  useEffect(() => {
    personService.getAll().then(response => setPersons(response));
  }, []);

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
    let newPerson = { name: newName, number: newPhoneNumber };
    let existingContact = persons.find(el => el.name === newName);
    if (existingContact) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace de old number with a new one?`
        )
      ) {
        personService
          .update(existingContact.id, newPerson)
          .then(response =>
            setPersons(
              persons
                .filter(el => el.id !== existingContact.id)
                .concat(response)
            )
          );
      }
    } else {
      personService
        .create(newPerson)
        .then(response => setPersons(persons.concat(response)));
    }
    setNewName("");
    setNewPhoneNumber("");
  };

  const remove = id => {
    if (
      window.confirm(
        `Do you really want to remove ${
          persons.find(el => el.id === id).name
        } from your phonebook?`
      )
    ) {
      personService
        .remove(id)
        .then(response => setPersons(persons.filter(el => el.id !== id)));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilter} />

      <h3>Add new contact</h3>
      <Form
        addPhone={addPhone}
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        handleNewName={handleNewName}
        handleNewPhoneNumber={handleNewPhoneNumber}
      />

      <h3>Numbers</h3>
      <Entries persons={displayPersons()} removeContact={remove} />
    </div>
  );
};

export default App;
