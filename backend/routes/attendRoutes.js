const express = require('express')
const router = express.Router()
const attendController = require('../controllers/attendController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/attendstatus')
    .get(attendController.getAttendanceStatus)

router.route('/:id')
    .get(attendController.getAttendanceAllDetails)
    .post(attendController.markAttendance) 

module.exports = router
