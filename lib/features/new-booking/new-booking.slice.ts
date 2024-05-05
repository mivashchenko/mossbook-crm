import { createSlice } from '@reduxjs/toolkit'
import { Employee } from '@/types'
import { Service } from '@prisma/client'

const initialState: {
  specialist: Employee | null
  date: Date | null
  services: Service[]
} = {
  specialist: null,
  date: null,
  services: [],
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
    toggleSelectService: (state, action) => {
      const index = state.services.findIndex((s) => s.id === action.payload.id)
      if (index === -1) {
        state.services.push(action.payload)
      } else {
        state.services.splice(index, 1)
      }
    },
  },
})

export const newBookingReducer = newBookingSlice.reducer
export const newBookingActions = newBookingSlice.actions
