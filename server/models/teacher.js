const mongoose = require('mongoose')
const teacherSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your name']
    },
    email: {
        type: String,
        required: [true, 'Please add your work email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please create a unique password']
    },
},
    {
        timestamps: true
    })

    module.exports = mongoose.model('Teacher', teacherSchema)