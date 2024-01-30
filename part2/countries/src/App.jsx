import { useState } from 'react'
import { useEffect } from 'react'
import countryService from "./services/countries"

import Search from "./components/search"
import Display from './components/display'


function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    countryService.getAll().then((data) => {
      setCountries(data)
    })
  }, [])

  const search = (evt) => {
    setFilter(evt.currentTarget.value)
  }

  return (
    <>
    <Search search={search}></Search>
    <Display setFilter={setFilter} data={countries.filter((country) => country.name.common.toLowerCase().includes(filter.toLowerCase()))}></Display>
    </>
  )
}

export default App
