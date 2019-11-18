import React from "react";

const Entry = ({ person, removeContact }) => (
  <div>
    <span>
      {person.name} - {person.number}
    </span>
    <button onClick={() => removeContact(person.id)}>remove</button>
  </div>
);

export default Entry;
