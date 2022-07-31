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

    // add fields here above (see screenshot from Sam)

    {
        timestamps: true,
    }
)
module.exports = mongoose.model('Class', classSchema)

