import { useState } from 'react'


const Button = ({handleClick, btnText}) => {
  return (
    <button onClick={handleClick}>{btnText}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good == 0 && neutral == 0 && bad == 0){
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
    <h1>statistics</h1>
    <table>
      <tbody>
        <tr><StatisticLine text="good" value={good}></StatisticLine></tr>
        <tr><StatisticLine text="neutral" value={neutral}></StatisticLine></tr>
        <tr><StatisticLine text="bad" value={bad}></StatisticLine></tr>
        <tr><StatisticLine text="all" value={good+neutral+bad}></StatisticLine></tr>
        <tr><StatisticLine text="average" value={(good-bad)/(good+neutral+bad)}></StatisticLine></tr>
        <tr><StatisticLine text="positive" value={String(((good)/(good+neutral+bad))*100)+"%"}></StatisticLine></tr>
      </tbody>
    </table>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <><td>{text}</td><td>{value}</td></>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>{setGood(good+1)}} btnText="good"></Button>
      <Button handleClick={()=>{setNeutral(neutral+1)}} btnText="neutral"></Button>
      <Button handleClick={()=>{setBad(bad+1)}} btnText="bad"></Button>

      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App
