const path = require('path')
const router = require('express').Router()

const user = require('./user')
const exerciseLogs = require('./exerciseLogs')

function index(req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'))
}

router.get('/', index)
router.post('/api/exercise/new-user', user.registerUser)
router.post('/api/exercise/add', exerciseLogs.addExercise)
router.get('/api/exercise/log', exerciseLogs.viewLogs)

module.exports = router