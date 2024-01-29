import { useState } from 'react'
import { useEffect } from 'react'
import countryService from "./services/countries"


const Search = ({search}) => {
  return (
    <div>
      find countries <input onChange={search}></input>
    </div>
  )
}


const Display = ({data}) => {
  if(data.length > 10){
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }else if(data.length > 1){
    return (
      <>
        {data.map((elem) => {
          return <div key={elem.cca3}>{elem.name.common}</div>
        })}
      </>
    )
  }else if(data.length == 1){
    return (
    <>
      <h1>{data[0].name.common}</h1>
      <div>capital: {data[0].capital.join(", ")}</div>
      <div>area: {data[0].area}</div>
      <h2>languages</h2>
      <ul>
        {Object.values(data[0].languages).map((elem) => <li key={elem}>{elem}</li>)}
      </ul>
      <div style={{fontSize: "100pt"}}>
        {data[0].flag}
      </div>
    </>
    )
  }
  
}

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    countryService.getAll().then((data) => {
      console.log(data)
      setCountries(data)
    })
  }, [])

  const search = (evt) => {
    setFilter(evt.currentTarget.value)
  }

  return (
    <>
    <Search search={search}></Search>
    <Display data={countries.filter((country) => country.name.common.toLowerCase().includes(filter.toLowerCase()))}></Display>
    </>
  )
}

export default App
