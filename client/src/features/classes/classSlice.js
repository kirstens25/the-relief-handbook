import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import classService from './classService'

const initialState = {
  classes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new Class
export const createClass = createAsyncThunk(
  'classes/create',
  async (classData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await classService.createClass(classData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user class
export const getClass = createAsyncThunk(
  'classes/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await classService.getClass(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user class
export const deleteClass = createAsyncThunk(
  'classes/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await classService.deleteClass(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const classSlice = createSlice({
  name: 'classroom',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createClass.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createClass.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.classes.push(action.payload)
      })
      .addCase(createClass.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getClass.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getClass.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.classes = action.payload
      })
      .addCase(getClass.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteClass.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteClass.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.classes = state.classes.filter(
          (classroom) => classroom._id !== action.payload.id
        )
      })
      .addCase(deleteClass.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = classSlice.actions
export default classSlice.reducer