import React from "react";

const Part = ({ part }) => (
  <div>
    <p>
      {part.title} {part.exercises}
    </p>
  </div>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(el => (
        <Part key={el.id} part={el} />
      ))}
    </>
  );
};

const Header = ({ title }) => (
  <div>
    <p> {title} </p>
  </div>
);

const Footer = ({ parts }) => {
  const total = parts.map(el => el.exercises).reduce((acc, cur) => acc + cur);
  return <div>Total of {total} exercises</div>;
};

const Course = ({ course }) => (
  <>
    <Header title={course.title} />
    <Content parts={course.parts} />
    <Footer parts={course.parts} />
  </>
);

export default Course;
