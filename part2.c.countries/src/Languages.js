import React from "react";
import Language from "./Language";

const Languages = ({ languages }) =>
  languages.map(el => <Language lang={el.name} key={el.name} />);

export default Languages;
