import React, { useState } from 'react'

const Button = ({text, handleClick}) => {

  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Anecdote = ({header, anecdotes, selected, vote}) => {
  return(
    <>
      <h2>{header}</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {vote[selected]} votes</div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const handleSelected = () => {
    const random = Math.floor(Math.random() * (anecdotes.length))
    setSelected(random)
  }

  const handleVote = () => {
    const voteCopy = [...vote]
    voteCopy[selected] += 1
    setVote(voteCopy)
  }

  let indexOfMaxValue = vote.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

  return (
    <div>
      <Anecdote header="Anecdote of the day" anecdotes={anecdotes} selected={selected} vote={vote}/>
      <Button text="random anecdote" handleClick={handleSelected}/>
      <Button text="vote" handleClick={handleVote}/>
      <Anecdote header="Anecdote with most votes" anecdotes={anecdotes} selected={indexOfMaxValue} vote={vote}/>
    </div>
  )
}

export default App