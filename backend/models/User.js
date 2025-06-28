const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
        default: "Employee"
    },
    designation:{
        type: String,
        default: "Software Engineer"
    },
    department:{
        type: String,
        default: "Engineering"
    },
    joiningDate:{
        type: String,
        default: "15 January 2024"
    },
    phone:{
        type: String,
        default: "+91 657490462"
    },
    performance: {
        type: String,
        default: "Lorem ipsum"
    }
})

module.exports = mongoose.model('User', userSchema)