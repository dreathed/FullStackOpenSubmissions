import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl).then(response => {return response.data})
}

const create = newObject => {
  return axios.post(baseUrl, newObject).then(response => {return response.data})
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).then(response => {return response.data})
}

const deleteEntry = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then(response => {return response.data})
}

export default { 
  getAll, 
  create, 
  update,
  deleteEntry
}