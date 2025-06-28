const mongoose = require('mongoose')

const ongoingTaskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    status:{
        type: String,
        require: true,
        default: "Pending",
    },
    task: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('OngoingTask', ongoingTaskSchema)
