const express = require('express')
const router = express.Router()
const { registerTeacher } = require('../c') // finish this require statement

// Adding a new teacher (user)
router.post('/', registerTeacher)


module.exports = Router;

// got up to 9:42 mins (video 2 - https://www.youtube.com/watch?v=enopDSs3DRw&ab_channel=TraversyMedia)