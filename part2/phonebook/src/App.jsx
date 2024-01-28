import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PhoneForm from './components/PhoneForm'
import Display from './components/Display'

import phoneEntriesService from './services/phoneEntries'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setSearchFilter] = useState('')

  useEffect(() => {
    phoneEntriesService.getAll()
      .then((data) => {
        setPersons(data)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    let names = persons.map((person) => person.name)
    if(names.includes(newName)){
      if(window.confirm(`${newName} is already added to phonebook. Do you want to replace the old number with the new one`)){
        let person = persons.find((elem) => elem.name == newName)
        console.log("update, person: ", person)
        phoneEntriesService.update(person.id, {name: newName, number: newNumber}).then((res) => console.log(res))
        let newPersons = persons.map((elem) => elem.id === person.id ? {name: newName, number: newNumber, id: person.id} : elem)
        setPersons(newPersons)
        setNewName('')
        setNewNumber('')
      }
    }else{
      phoneEntriesService.create({name: newName, number: newNumber})
        .then((data) => {phoneEntriesService.getAll()
          .then((newPersons) => {
            setPersons(newPersons)
          })})
      setNewName('')
      setNewNumber('')
    }
  }

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchFilter(event.target.value)
  }

  const deleteEntry = (person) => {
    return () => {
      if(window.confirm(`Do you want to delete the entry of ${person.name}`)){
        return phoneEntriesService.deleteEntry(person.id).then((res) => {
          phoneEntriesService.getAll()
            .then((data) => {
              setPersons(data)
            })
        })
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchChange={handleSearchChange}></Filter>
      <PhoneForm handleInputChange={handleInputChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} newName={newName} newNumber={newNumber}></PhoneForm>
      <Display persons={persons} searchFilter={searchFilter} deleteFunction={deleteEntry}></Display>
    </div>
  )
}

export default App