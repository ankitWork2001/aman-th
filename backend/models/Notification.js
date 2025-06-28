const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name:{
        type: String,
        require: true,
    },
    type:{
        type: String,
        require: true,
    },
    data:{
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
    }
})

module.exports = mongoose.model('Notification', notificationSchema)
