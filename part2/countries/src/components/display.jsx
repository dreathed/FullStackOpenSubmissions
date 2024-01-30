import { useState } from 'react'
import { useEffect } from 'react'
import WeatherDisplay from "./weatherDisplay"

import weather from "../services/weather"

const Display = ({setFilter, data}) => {
    const [weatherdata, setWeatherdata] = useState({});
  
    useEffect(()=>{
      if(data.length == 1){
        weather.getData(data[0].capitalInfo.latlng[0],data[0].capitalInfo.latlng[1])
        .then((weather) => {
          setWeatherdata({cloud: weather.current.cloud_cover,temp: weather.current.temperature_2m,windspeed: weather.current.wind_speed_10m})
        })
      }
    },[data])
  
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
            return <div key={elem.cca3}>{elem.name.common} <button onClick={()=>{setFilter(elem.name.common)}}>show</button></div>
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
        <WeatherDisplay data={weatherdata}></WeatherDisplay>
      </>
      )
    }
    
  }

  export default Display