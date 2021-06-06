import React from 'react'

const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => {
          return(
          <Part key={part.id} part={part.name} exercises={part.exercises}/>
          )
        })}
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <div>
          <b>number of exercises: {props.parts.reduce((sum, part) => sum + part.exercises, 0)}</b>
      </div>
    )
  }
  
  const Course = ({course}) => {
    return(
      <>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </>
    )
  }

  export default Course