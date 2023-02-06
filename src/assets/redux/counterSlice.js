import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
}

export const counterSlice = createSlice({
  name: 'Info',
  initialState,
  reducers: {
    InfoTime: (state, action) =>{
        state.data = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { InfoTime } = counterSlice.actions

export default counterSlice.reducer