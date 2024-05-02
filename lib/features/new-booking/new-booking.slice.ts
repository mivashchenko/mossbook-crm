import { createSlice } from '@reduxjs/toolkit'
import { Employee } from '@/types'

const initialState: { specialist: Employee | null; date: Date | null } = {
  specialist: null,
  date: null,
}

const newBookingSlice = createSlice({
  name: 'newBooking',
  initialState,
  reducers: {
    setSpecialist: (state, action) => {
      state.specialist = action.payload
    },
    setDate: (state, action) => {
      state.date = action.payload
    },
  },
})

export const newBookingReducer = newBookingSlice.reducer
export const newBookingActions = newBookingSlice.actions
