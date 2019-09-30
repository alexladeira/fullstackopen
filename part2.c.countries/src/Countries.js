import React from "react";
import Country from "./Country";

const Countries = ({ countries }) =>
  countries.length > 10 ? (
    <p> Too many results </p>
  ) : countries.length > 1 && countries.length < 10 ? (
    countries.map(el => (
      <Country country={el} nameOnly="true" key={el.alpha2Code} />
    ))
  ) : countries.length === 1 ? (
    <Country country={countries[0]} />
  ) : (
    []
  );

export default Countries;
