const mongoose = require('mongoose')

const leaveSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
    },
    leaveType: {
        type: String,
        require:true,
        default: "Casual"
    },
    startDate: {
        type: String,
        require: true,
    },
    endDate: {
        type: String,
        require: true,
    },
    reason: {
        type: String,
        default: "",
    },
    status:{
        type: String,
        require: true,
        default: "Pending",
    },
})

module.exports = mongoose.model('Leave', leaveSchema)
