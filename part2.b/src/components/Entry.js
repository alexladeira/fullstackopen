import React from "react";

const Entry = ({ person }) => (
  <div>
    <span>
      {person.name} - {person.number}
    </span>
  </div>
);

export default Entry;
