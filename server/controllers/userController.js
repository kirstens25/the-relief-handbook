const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');


// PUBLIC | createTeacher | POST route api/users - create new teacher (user)
const createTeacher = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if(!name || !email || !password){
  res.status(400)
  throw new Error('Please enter all fields')
  }

// Confirm whether teacher exists in the system
const teacherExists = await User.findOne({email})
if (teacherExists) {
    res.status(400)
    throw new Error ('Teacher already exists')
};

// HASH password
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

// Create teacher
const user = await User.create({
    name,
    email,
    password: hashedPassword,
});

if(user)
 { res.status(201).json({
         _id: user.id,
         name: user.name,
         email: user.email,
         token: generateToken(user._id),})
 } else {
     res.status(400);
     throw new Error('Invalid teacher data')
    };
});


// PUBLIC | loginTeacher | POST route api/users/login - login as a teacher
const loginTeacher = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

  // Check for teacher email
    const user = await User.findOne({email});
    
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


// PRIVATE | getMyProfile | GET route api/users/my-profile - show the logged in user's data
const getMyProfile = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
  });


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { 
        expiresIn: '30d',})
}


module.exports = { createTeacher, loginTeacher, getMyProfile }