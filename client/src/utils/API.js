import axios from "axios";

export default {
  // Gets all player
  getPlayers: function() {
    return axios.get("/api/players");
  },
  // Gets the user with the given id
  get: function(id) {
    return axios.get("/api/player/" + id);
  },
  signUp: function(user){
    return axios.post("/api/signup", user)
    console.log(user)
  },

  // For saving players, not sure if needed
  // savePlayer: function(UserData) {
  //   return axios.post("/api/player", UserData);
  // }
};
