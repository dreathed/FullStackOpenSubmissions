import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const MostVotes = ({votes, anecdotes}) => {
  let maxEntry = Object.entries(votes).find((elem) => elem[1] == Math.max(...Object.values(votes)))
  if (maxEntry === undefined){
    return (<></>)
  }
  return (
    <>
    <h1>Anecdote with most votes</h1>
    <p>{anecdotes[maxEntry[0]]}</p>
    <p>has {maxEntry[1]} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  const getNextAnecdote = () => {
    let index = Math.floor(Math.random()*anecdotes.length)
    setSelected(index);
  }

  const makeAVote = () => {
    let newVotes = {...votes}
    if(!(String(selected) in votes)){
      newVotes[String(selected)] = 1;
    }else{
      newVotes[String(selected)] += 1;
    }
    setVotes(newVotes);
  }

  let noOfVotes = (String(selected) in votes) ? votes[selected] : 0
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {noOfVotes} votes
      </div>
      <Button text="vote" handleClick={makeAVote}></Button>
      <Button text="next anecdote" handleClick={getNextAnecdote}></Button>

      <MostVotes votes={votes} anecdotes={anecdotes}></MostVotes>
    </div>
  )
}

export default App