import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
}
export const counterSlice = createSlice({
  name: 'Info',
  initialState,
  reducers: {
    InfoTime: (state, action) => {
      state.data = action.payload
    }
  },
})

export const { InfoTime } = counterSlice.actions

export default counterSlice.reducer