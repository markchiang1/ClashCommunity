const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    monday: {
          twelveAM: Boolean,
          oneAM: Boolean,
          twoAM: Boolean,
          threeAM: Boolean,
          fourAM: Boolean,
          fiveAM: Boolean,
          sixAM: Boolean,
          sevenAM: Boolean,
          eightAM: Boolean,
          nineAM: Boolean,
          tenAM: Boolean,
          elevenAM: Boolean,
          twevlePM: Boolean,
          onePM: Boolean,
          twoPM: Boolean,
          threePM: Boolean,
          fourPM: Boolean,
          fivePM: Boolean,
          sixPM: Boolean,
          sevenPM: Boolean,
          eightPM: Boolean,
          ninePM: Boolean,
          tenPM: Boolean,
          elevenPM: Boolean,
          twelvePM: Boolean,
    },
    tuesday: {
          twelveAM: Boolean,
          oneAM: Boolean,
          twoAM: Boolean,
          threeAM: Boolean,
          fourAM: Boolean,
          fiveAM: Boolean,
          sixAM: Boolean,
          sevenAM: Boolean,
          eightAM: Boolean,
          nineAM: Boolean,
          tenAM: Boolean,
          elevenAM: Boolean,
          twevlePM: Boolean,
          onePM: Boolean,
          twoPM: Boolean,
          threePM: Boolean,
          fourPM: Boolean,
          fivePM: Boolean,
          sixPM: Boolean,
          sevenPM: Boolean,
          eightPM: Boolean,
          ninePM: Boolean,
          tenPM: Boolean,
          elevenPM: Boolean,
          twelvePM: Boolean,
    },
    wednesday: {
          twelveAM: Boolean,
          oneAM: Boolean,
          twoAM: Boolean,
          threeAM: Boolean,
          fourAM: Boolean,
          fiveAM: Boolean,
          sixAM: Boolean,
          sevenAM: Boolean,
          eightAM: Boolean,
          nineAM: Boolean,
          tenAM: Boolean,
          elevenAM: Boolean,
          twevlePM: Boolean,
          onePM: Boolean,
          twoPM: Boolean,
          threePM: Boolean,
          fourPM: Boolean,
          fivePM: Boolean,
          sixPM: Boolean,
          sevenPM: Boolean,
          eightPM: Boolean,
          ninePM: Boolean,
          tenPM: Boolean,
          elevenPM: Boolean,
          twelvePM: Boolean,
    },
    thursday: {
          twelveAM: Boolean,
          oneAM: Boolean,
          twoAM: Boolean,
          threeAM: Boolean,
          fourAM: Boolean,
          fiveAM: Boolean,
          sixAM: Boolean,
          sevenAM: Boolean,
          eightAM: Boolean,
          nineAM: Boolean,
          tenAM: Boolean,
          elevenAM: Boolean,
          twevlePM: Boolean,
          onePM: Boolean,
          twoPM: Boolean,
          threePM: Boolean,
          fourPM: Boolean,
          fivePM: Boolean,
          sixPM: Boolean,
          sevenPM: Boolean,
          eightPM: Boolean,
          ninePM: Boolean,
          tenPM: Boolean,
          elevenPM: Boolean,
          twelvePM: Boolean,
    },
    friday: {
          twelveAM: Boolean,
          oneAM: Boolean,
          twoAM: Boolean,
          threeAM: Boolean,
          fourAM: Boolean,
          fiveAM: Boolean,
          sixAM: Boolean,
          sevenAM: Boolean,
          eightAM: Boolean,
          nineAM: Boolean,
          tenAM: Boolean,
          elevenAM: Boolean,
          twevlePM: Boolean,
          onePM: Boolean,
          twoPM: Boolean,
          threePM: Boolean,
          fourPM: Boolean,
          fivePM: Boolean,
          sixPM: Boolean,
          sevenPM: Boolean,
          eightPM: Boolean,
          ninePM: Boolean,
          tenPM: Boolean,
          elevenPM: Boolean,
          twelvePM: Boolean,
    },
    saturday: {
          twelveAM: Boolean,
          oneAM: Boolean,
          twoAM: Boolean,
          threeAM: Boolean,
          fourAM: Boolean,
          fiveAM: Boolean,
          sixAM: Boolean,
          sevenAM: Boolean,
          eightAM: Boolean,
          nineAM: Boolean,
          tenAM: Boolean,
          elevenAM: Boolean,
          twevlePM: Boolean,
          onePM: Boolean,
          twoPM: Boolean,
          threePM: Boolean,
          fourPM: Boolean,
          fivePM: Boolean,
          sixPM: Boolean,
          sevenPM: Boolean,
          eightPM: Boolean,
          ninePM: Boolean,
          tenPM: Boolean,
          elevenPM: Boolean,
          twelvePM: Boolean,
    },
    sunday: {
          twelveAM: Boolean,
          oneAM: Boolean,
          twoAM: Boolean,
          threeAM: Boolean,
          fourAM: Boolean,
          fiveAM: Boolean,
          sixAM: Boolean,
          sevenAM: Boolean,
          eightAM: Boolean,
          nineAM: Boolean,
          tenAM: Boolean,
          elevenAM: Boolean,
          twevlePM: Boolean,
          onePM: Boolean,
          twoPM: Boolean,
          threePM: Boolean,
          fourPM: Boolean,
          fivePM: Boolean,
          sixPM: Boolean,
          sevenPM: Boolean,
          eightPM: Boolean,
          ninePM: Boolean,
          tenPM: Boolean,
          elevenPM: Boolean,
          twelvePM: Boolean,
    },
  }
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;