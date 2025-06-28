const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
    time: {
        type: String,
        require:true
    },
    status: {
        type: String,
        require: true,
        default: "Pending",
    },
})

module.exports = mongoose.model('Attendances', attendanceSchema)
