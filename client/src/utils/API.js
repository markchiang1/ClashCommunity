import axios from 'axios'

export default {
  // Gets all Users
  getUsers: function () {
    return axios.get('/api/users')
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get('/api/users/' + id)
  },
  // Deletes the User with the given id
  deleteUser: function (id) {
    return axios.delete('/api/users/' + id)
  },
  // Saves a User to the database
  saveUser: function (UserData) {
    return axios.post('/api/users', UserData)
  }
}
