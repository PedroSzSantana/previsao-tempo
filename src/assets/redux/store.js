import { configureStore } from '@reduxjs/toolkit'
import InfoReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    Info: InfoReducer,
  },
})