const express = require('express')
const router = express.Router()
const documentController = require('../controllers/documentController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(documentController.getDocumentAllDetails)

router.route('/:id')
    .get(documentController.getDocumentDetails)
    .post(documentController.submitDocumentDetails)
    .put(documentController.updateDocumentDetails)


module.exports = router
