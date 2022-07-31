const mongoose = require('mongoose')
const classSchema = mongoose.Schema(
    {
        user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
        class_number: {
            type: String,
            required: true ['Please add a class number.']
        }
    },
    {
        timestamps: true,
    }
)
module.exports = mongoose.model('Classroom', classSchema)

