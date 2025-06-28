const express = require('express')
const router = express.Router()
const NotificationController = require('../controllers/NotificationController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(NotificationController.getNotificationDetails)
    
router.route('/:id')
    .post(NotificationController.createNotificationDetails)


module.exports = router
