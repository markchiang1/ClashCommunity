const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
  playerName: { type: String, required: true },
  passWord: { type: String, required: true },
  ign: String,
  rank: String,
  role: String,
  captain: Boolean,
  teamName: String,
  server: String,
  schedule: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  }
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player
