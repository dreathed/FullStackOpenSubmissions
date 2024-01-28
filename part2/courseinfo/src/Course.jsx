const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map((part) => {
      return <Part key={part.id} part={part}></Part>
    })}  
  </>

const Course = ({course}) => {
  let sum = course.parts.reduce((acc, current) => {return acc+current.exercises},0);
  return (
    <>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total sum={sum}></Total>
    </>
    
  )
}

export default Course