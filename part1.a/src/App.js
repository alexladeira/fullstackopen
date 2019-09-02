import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Part = props => {
  return (
    <div>
      <p> {props.title} </p>
    </div>
  );
};

const Content = props => {
  return (
    <>
      {props.parts.map(value => {
        return <Part title={value.title} />;
      })}
    </>
  );
};

const Header = props => {
  return (
    <div>
      <p> {props.title} </p>
    </div>
  );
};

const Footer = props => {
  return <div>Numero de exercicios: {props.totalExercices}</div>;
};

function App() {
  const course = {
    title: "Half Stack application development",
    parts: [
      {
        title: "Fundamentals of React",
        exercises: 10
      },
      {
        title: "Using props to pass data",
        exercises: 7
      },
      {
        title: "State of a component",
        exercises: 14
      }
    ]
  };
  return (
    <>
      <Header title={course.title} />
      <Content parts={course.parts} />
      <Footer
        totalExercices={course.parts
          .map(element => element.exercises)
          .reduce((acc, exercises) => acc + exercises)}
      />
    </>
  );
}

export default App;
