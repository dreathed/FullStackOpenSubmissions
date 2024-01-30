import axios from 'axios'


const getData = (lat, lng) => {
    const baseUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,wind_speed_10m,cloud_cover`
  return axios.get(baseUrl).then(response => {return response.data})
}

export default {
    getData
}