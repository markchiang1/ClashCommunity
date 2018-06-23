const router = require('express').Router()
const lessonRoutes = require('./user')

// User routes
router.use('/user', userRoutes)

module.exports = router
