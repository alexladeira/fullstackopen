import React from "react";
import Entry from "./Entry";

const Entries = ({ persons }) =>
  persons.map(person => <Entry person={person} key={person.name} />);

export default Entries;
