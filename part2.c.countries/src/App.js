import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Countries from "./Countries";

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
