const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/personaldetails/resetpassword/:id')
    .patch(usersController.resetPassword)

router.route('/personaldetails/:id')
    .get(usersController.getUserDetails)
    .put(usersController.updateUserDetails)
    .delete(usersController.deactivateUserDetails)

module.exports = router


















// const express = require('express')
// const router = express.Router()
// const usersController = require('../controllers/usersController')
// const verifyJWT = require('../middleware/verifyJWT')

// router.use(verifyJWT)

// router.route('/personaldetails/:id')
//     .get(usersController.getUserDetails)
//     .put(usersController.updateUserDetails)
//     .delete(usersController.deactivateUserDetails)

// router.route('/signup')
//     .post(authController.signup)

// router.route('/refresh')
//     .get(authController.refresh)

// router.route('/logout')
//     .get(authController.logout)


// module.exports = router

// /*
// router.route('/')
//     .get(usersController.getAllUsers)
//     .post(usersController.createNewUser)
//     .patch(usersController.updateUser)
//     .put(usersController.updateUser)
//     .delete(usersController.deleteUser)
// */