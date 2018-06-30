const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		console.log('localStrategy')
		User.findOne({ 'local.username': username }, (err, userMatch) => {
			if (err) {
				console.log(err)
				return done(err)
			}
			if (!userMatch) {
				console.log('Incorrect username')
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!userMatch.checkPassword(password)) {
				console.log('Incorrect password')
				return done(null, false, { message: 'Incorrect password' })
			}
				console.log('success')
			return done(null, userMatch)

		})
	}
)

module.exports = strategy
