const express = require('express');
const router = express.Router();
const {
    getClass,
    createClass,
    updateClass,
    deleteClass,
  } = require('../controllers/classController')
  
  const { protect } = require('../helper/auth')
  
  router.route('/').get(protect, getClass).post(protect, createClass)
  router.route('/:id').delete(protect, deleteClass).put(protect, updateClass)

module.exports = router;