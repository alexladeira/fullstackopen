import React from "react";
import Entry from "./Entry";

const Entries = ({ persons, removeContact }) =>
  persons.map(person => (
    <Entry person={person} key={person.id} removeContact={removeContact} />
  ));

export default Entries;
