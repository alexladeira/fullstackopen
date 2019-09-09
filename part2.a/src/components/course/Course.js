import React from "react";

const Part = ({ title, exercises }) => (
  <div>
    <p>
      {title} {exercises}
    </p>
  </div>
);

const Content = props => {
  return (
    <>
      {props.parts.map(value => (
        <Part key={value.id} title={value.title} exercises={value.exercises} />
      ))}
    </>
  );
};

const Header = props => (
  <div>
    <p> {props.title} </p>
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
