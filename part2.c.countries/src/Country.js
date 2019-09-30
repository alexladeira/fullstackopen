import React, { useState, useEffect } from "react";
import Languages from "./Languages";
import WeatherDetail from "./WeatherDetail";
import axios from "axios";

const Country = ({ country, nameOnly }) => {
  const [currentCountry, setCurrentCountry] = useState(country);
  const [detailData, setDetailData] = useState(nameOnly);
  const [weather, setWeather] = useState(null);

  const handleClick = c => {
    setCurrentCountry(c);
    setDetailData(false);
  };

  useEffect(() => {
    if (!detailData) {
      const fetchData = async () => {
        const result = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            country.capital
          },${country.alpha2Code.toLowerCase()}&appid=6d57aba36598ce4030b3dc1a7a4fa773&units=metric`
        );
        setWeather(result.data);
      };
      fetchData();
    }
  }, [country.alpha2Code, country.capital, detailData]);

  return detailData ? (
    <>
      <p>
        {currentCountry.name}
        <button onClick={() => handleClick(currentCountry)}>show</button>
      </p>
    </>
  ) : (
    <>
      <h2>{currentCountry.name}</h2>
      <p>capital: {currentCountry.capital}</p>
      <p>population: {currentCountry.population}</p>
      <h3>Languages</h3>
      <ul>
        <Languages languages={currentCountry.languages} />
      </ul>
      <img
        src={currentCountry.flag}
        alt={currentCountry.name}
        height="120"
        width="120"
      />
      <WeatherDetail weatherDetail={weather} />
    </>
  );
};

export default Country;
