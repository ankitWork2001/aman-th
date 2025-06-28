const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const loginLimiter = require('../middleware/loginLimiter')

router.route('/login')
    .post(loginLimiter, authController.login)

router.route('/signup')
    .post(authController.signup)

router.route('/refresh')
    .get(authController.refresh)

router.route('/logout')
    .get(authController.logout)

module.exports = router