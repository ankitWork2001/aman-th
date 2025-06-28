const express = require('express')
const router = express.Router()
const leaveController = require('../controllers/leaveController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(leaveController.getLeaveAllDetails)

router.route('status/:id')
    .patch(leaveController.setLeaveStatus)

router.route('/:id')
    .get(leaveController.getUserLeaveDetails)
    .post(leaveController.createLeaveDetails)


module.exports = router
