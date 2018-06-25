const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/clash"
);

const userSeed = [
  {
    userName: "testUser",
    passWord: "testPassword",
    ign: "testIGN",
    rank: "diamond",
    role: "top",
    captain: true,
    teamName: "FreeSM",
    server: "NA",
    schedule: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sundary: []
    }
  }
]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log("Seed inserted to DB!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
