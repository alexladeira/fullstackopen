import React from "react";

const Form = ({
  addPhone,
  newName,
  newPhoneNumber,
  handleNewName,
  handleNewPhoneNumber
}) => (
  <form onSubmit={addPhone}>
    <div>
      name: <input value={newName} onChange={handleNewName} />
    </div>
    <div>
      number: <input value={newPhoneNumber} onChange={handleNewPhoneNumber} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default Form;
