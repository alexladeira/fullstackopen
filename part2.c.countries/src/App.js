import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const Language = ({ lang }) => <li>{lang}</li>;

const Languages = ({ languages }) =>
  languages.map(el => <Language lang={el.name} key={el.name} />);

const Country = ({ country, nameOnly }) =>
  nameOnly ? (
    <p>{country.name}</p>
  ) : (
    <>
      <h2>{country.name}</h2>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h3>languages</h3>
      <ul>
        <Languages languages={country.languages} />
      </ul>
      <img src={country.flag} alt={country.name} height="180" width="180" />
    </>
  );

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

const App = () => {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

  const handleChange = event => setFilter(event.target.value);

  useEffect(() => {
    if (filter && filter.length > 0) {
      const fetchData = async () => {
        const result = await axios.get(
          `https://restcountries.eu/rest/v2/name/${filter}`
        );
        setCountries(result.data);
      };
      fetchData();
    }
  }, [filter]);

  return (
    <>
      <p>
        find countries <input type="text" onChange={handleChange} />
      </p>
      <Countries countries={countries} />
    </>
  );
};

export default App;
