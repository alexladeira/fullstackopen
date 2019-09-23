import React from "react";
import "./App.css";
import "./components/course/Course";
import Course from "./components/course/Course";

function App() {
  const courses = [
    {
      title: "Half Stack application development",
      id: 0,
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
    },
    {
      title: "Node.js",
      id: 1,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 0
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 1
        }
      ]
    }
  ];
  return courses.map(course => (
    <>
      <Course course={course} key={course.id} />
    </>
  ));
}

export default App;
