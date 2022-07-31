import axios from 'axios'

const API_URL = '/api/classes/'

// Create new class
const createClass = async (classData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, classData, config)

  return response.data
}

// Get user s
const getClass = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user class
const deleteClass = async (classId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + classId, config)

  return response.data
}

const classService = {
  createClass,
  getClass,
  deleteClass,
}

export default classService