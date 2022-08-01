const asyncHandler = require('express-async-handler');

const Classroom = require('../models/classroom');
const User = require('../models/user');

// getClass | GET route api/classroom (private)
const getClass = asyncHandler(async (req, res) => {
    const className = await Classroom.find({ user: req.user.id })
    res.status(200).json(className)
});

// createClass | POST route api/class (private)
const createClass = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a class name')
    }
    const className = await Classroom.create({  
      extraCurricActivities: req.body.extraCurricActivities,
      events: req.body.events,
      morningRoutines: req.body.morningRoutines,
      afternoonRoutines: req.body.afternoonRoutines,
      rewardsSystem: req.body.rewardsSystem,
      behaviourStrategies: req.body.behaviourStrategies,
      user: req.user.id 
    });
    res.status(200).json(className);
});

// updateClass | PUT route api/class (private)
const updateClass = asyncHandler(async (req, res) => {
    const classes = await Classroom.findById(req.params.id)
  
    if (!classes) {
      res.status(400)
      throw new Error('Class not found')
    }
  
    // Check for user/teacher
    if (!req.user) {
      res.status(401)
      throw new Error('Teacher not found')
    }
  
    // Make sure the logged in user/teacher matches the class teacher
    if (classes.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('Teacher not authorised')
    }
  
    const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedClass)
  })

// deleteClass | DELETE route api/class (private)
const deleteClass = asyncHandler(async (req, res) => {
    const classes = await Classroom.findById(req.params.id)
  
    if (!classroom) {
      res.status(400)
      throw new Error('Class not found')
    }
  
    // Check for user
    if (!req.user) {
      res.status(401)
      throw new Error('Teacher not found')
    }
  
    // Make sure the logged in user/teacher matches the class teacher
    if (Classroom.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('Teacher not authorized')
    }
  
    await classes.remove()
  
    res.status(200).json({ id: req.params.id })
  })
  

module.exports = { getClass, createClass, updateClass, deleteClass };
