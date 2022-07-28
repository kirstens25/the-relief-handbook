const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Teacher = require('../models/teacher');
const { useReducer } = require('react');


// PUBLIC | createTeacher | POST route api/teachers - create new teacher (user)
const createTeacher = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if(!name || !email || !password){
  res.status(400)
  throw new Error('Please enter all fields')
  }

// Confirm whether teacher exists in the system
const teacherExists = await Teacher.findOne({email})
if (teacherExists) {
    res.status(400)
    throw new Error ('Teacher already exists')
};

// HASH passowrd
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

// Create teacher
const user = await Teacher.create({
    name,
    email,
    password: hashedPassword
});

if(user)
 { res.status(201).json({
         _id: user.id,
         name: user.name,
         email: user.email,
         token: generateToken(user._id) })
 } else {
     res.status(400);
     throw new Error('Invalid teacher data')
    };
});


// PUBLIC | loginTeacher | POST route api/teachers/login - login as a teacher
const loginTeacher = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

  // Check for teacher email
    const user = await Teacher.findOne({email});
    
if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
    })
} else {
    res.status(400);
    throw new Error('Invalid credentials')
   };
});


// PRIVATE | getMyProfile | GET route api/teachers/my-profile - show the logged in user's data
const getMyProfile = asyncHandler(async (req, res) => {
    const {_id, name, email} = await Teacher.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email
    });
});


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { 
        expiresIn: '30d',})
}


module.exports = { createTeacher, loginTeacher, getMyProfile }