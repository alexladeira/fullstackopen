import React from "react";

const WeatherDetail = ({ weatherDetail }) =>
  weatherDetail ? (
    <>
      <h2>Wheather in {weatherDetail.name}</h2>
      <p>temperature: {weatherDetail.main.temp}</p>
      <p>wind: {weatherDetail.wind.speed}</p>
    </>
  ) : null;

export default WeatherDetail;
