import { createSlice } from '@reduxjs/toolkit'

const emptyForm = {
  fullName: '',
  organisation: '',
  email: '',
  phone: '',
  systemType: '',
  details: '',
}

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    form: { ...emptyForm },
    status: 'idle', // 'idle' | 'submitting' | 'submitted'
    error: null,
  },
  reducers: {
    updateField(state, action) {
      const { field, value } = action.payload
      state.form[field] = value
      state.error = null
    },
    submitStart(state) {
      state.status = 'submitting'
    },
    submitSuccess(state) {
      state.status = 'submitted'
      state.form = { ...emptyForm }
    },
    submitError(state, action) {
      state.status = 'idle'
      state.error = action.payload
    },
    resetForm(state) {
      state.form = { ...emptyForm }
      state.status = 'idle'
      state.error = null
    },
  },
})

export const {
  updateField,
  submitStart,
  submitSuccess,
  submitError,
  resetForm,
} = contactSlice.actions

// Thunk that simulates an async submission. Replace with a real API call later.
export const submitContactForm = (form) => async (dispatch) => {
  dispatch(submitStart())
  try {
    await new Promise((resolve) => setTimeout(resolve, 700))
    // TODO: POST `form` to backend endpoint here.
    dispatch(submitSuccess())
  } catch (err) {
    dispatch(submitError(err.message || 'Something went wrong.'))
  }
}

export default contactSlice.reducer
