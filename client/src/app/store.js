import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import classReducer from '../features/classes/classSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    classes: classReducer,
  },
})