const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your name']
    },
    email: {
        type: String,
        required: [true, 'Please add your work email'],
        unique: true,
        match: [/.+@.+\..+/, 'Please use a valid email address'],

    },
    password: {
        type: String,
        required: [true, 'Please create a unique password']
    },
},
    {
        timestamps: true
    })

    module.exports = mongoose.model('User', userSchema)