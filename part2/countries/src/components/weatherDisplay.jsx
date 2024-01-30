const WeatherDisplay = ({data}) => {
    return (
      <>
        <div>
          <div>cloud cover: {data.cloud}</div>
          <div>temperature: {data.temp}</div>
          <div>windspeed: {data.windspeed}</div>
        </div>
      </>
    )
  }

  export default WeatherDisplay