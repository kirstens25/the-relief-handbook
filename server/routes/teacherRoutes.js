const express = require('express')
const router = express.Router()
const { createTeacher, loginTeacher, getMyProfile } = require('../controllers/userController')
const { protect } = require('../helper/auth')

// Adding a new teacher (user)
router.post('/', createTeacher)

// Login as a teacher (already a user)
router.post('/login', loginTeacher)

// View teacher's profile (current user)
router.get('/my-profile', protect, getMyProfile)

module.exports = router;
