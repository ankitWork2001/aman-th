const mongoose = require('mongoose')

const documentUploadSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
    },
    aadharCard: {
        type: String,
        required: true,
    },
    panCard: {
        type: String,
        required: true,
    },
    resume: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('DocumentUpload', documentUploadSchema)
