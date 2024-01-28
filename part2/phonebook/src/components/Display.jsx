

const Display = ({persons, searchFilter, deleteFunction}) => {
    return (
      <>
        <h2>Numbers</h2>
        {persons.filter((person) => person.name.toLowerCase().includes(searchFilter.toLowerCase())).map((person) => {
          return <div key={person.name}><p style={{display: "inline"}} >{person.name} {person?.number}</p><button onClick={deleteFunction(person)}>delete</button></div>
        })}
      </>
    )
  }

export default Display