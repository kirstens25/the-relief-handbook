const express = require('express')
const router = express.Router()
const { createTeacher, loginTeacher, getMyProfile } = require('../controllers/teacherController')

// Adding a new teacher (user)
router.post('/', createTeacher)

// Login as a teacher (already a user)
router.post('/login', loginTeacher)

// View teacher's profile (current user)
router.get('/my-profile', protect, getMyProfile)

module.exports = Router;




// got up to 9:42 mins (video 2 - https://www.youtube.com/watch?v=enopDSs3DRw&ab_channel=TraversyMedia)