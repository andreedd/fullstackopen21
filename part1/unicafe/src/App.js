import React, { useState } from 'react'

const Header = ({title}) => (<h2>{title}</h2>)

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => (<tr><td>{text}</td><td>{value}</td></tr>)

const Statistics = ({good, neutral, bad, allvalue}) => {

  const calcAverage = (good + bad * -1) / allvalue
  const calcPositive = good / allvalue * 100 + "%"

  return(
  <>
      <table>
        <tbody>
          <Statistic text="good" value={good}/>
          <Statistic text="neutral" value={neutral}/>
          <Statistic text="bad" value={bad}/>
          <Statistic text="all" value={allvalue}/>
          <Statistic text="average" value={calcAverage}/>
          <Statistic text="positive" value={calcPositive}/>
        </tbody>
      </table>
  </>
  )
}

const App = () => {
  // save value of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allvalue, setAll] = useState(0)


  const handleGoodClick = () => {
    setAll(allvalue + 1)
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setAll(allvalue + 1)
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(allvalue + 1)
    setBad(bad + 1)
  }


  return (
    <div>
      <Header title="Give feedback"/>
      <Button text="good"  handleClick={handleGoodClick}/>
      <Button text="neutral" handleClick={handleNeutralClick}/>
      <Button text="bad" handleClick={handleBadClick}/>

      <Header title="Statistics"/>
      {allvalue > 0
      ? <Statistics good={good} neutral={neutral} bad={bad} allvalue={allvalue}/>
      : <div>No statistics yet, give some feedback to gather statistics</div>
      }
    </div>
  )
}

export default App