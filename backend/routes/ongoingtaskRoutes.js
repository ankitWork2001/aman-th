const express = require('express')
const router = express.Router()
const ongoingTaskController = require('../controllers/ongoingTaskController.js')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/:id')
    .get(ongoingTaskController.getAllTaskDetails)
    .delete(ongoingTaskController.deleteTaskDetails)
    .post(ongoingTaskController.createTaskDetails)

module.exports = router
