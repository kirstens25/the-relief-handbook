const asyncHandler = require('express-async-handler');

const Class = require('../models/class');
const Teacher = require('../models/teacher');

// getClass | GET route api/class (private)
const getClass = asyncHandler(async (req, res) => {
    const className = await Class.find({ teacher: req.user.id })
    res.status(200).json(className)
});

// createClass | POST route api/class (private)
const createClass = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a class name')
    }
    const className = await Class.create({
        text: req.body.text, // get help with this... is it body.text?
        user: req.user.id
    });
    res.status(200).json(className);
});

// updateClass | PUT route api/class (private)
// deleteClass | DELETE route api/class (private)

module.exports = {
    getClass,
    createClass,
    updateClass,
    deleteClass,
  }
