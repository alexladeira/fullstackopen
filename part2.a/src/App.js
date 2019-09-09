import React from "react";
import "./App.css";
import "./components/course/Course";
import Course from "./components/course/Course";

function App() {
  const course = {
    title: "Half Stack application development",
    parts: [
      {
        title: "Fundamentals of React",
        exercises: 10,
        id: 0
      },
      {
        title: "Using props to pass data",
        exercises: 7,
        id: 1
      },
      {
        title: "State of a component",
        exercises: 14,
        id: 2
      }
    ]
  };
  return <Course course={course} />;
}

export default App;
