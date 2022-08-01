const mongoose = require('mongoose')
const classSchema = mongoose.Schema(
    {
        user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    extraCurricActivities: {
       type: String,
        required: false,
    },
    events: {
        type: String,
        required: false,
    },
    morningRoutines: {
        type: String,
        required: false,
    },
    afternoonRoutines: {
        type: String,
        required: false,
    },
    rewardsSystem: {
        type: String,
        required: false,
    },
    behaviourStrategies: {
        type: String,
        required: false,
    },
},
    {
        timestamps: true,
    }
)
module.exports = mongoose.model('Classroom', classSchema)

