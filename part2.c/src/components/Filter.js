import React from "react";

const Filter = ({ onChange }) => (
  <>
    <span>
      filter <input type="text" onChange={onChange} />
    </span>
  </>
);

export default Filter;
