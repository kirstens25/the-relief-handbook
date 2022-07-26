const mongoose = require('mongoose')
const classSchema = mongoose.Schema(
    {
        teacher: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Teacher'
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

