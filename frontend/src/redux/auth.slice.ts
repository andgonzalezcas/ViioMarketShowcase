import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  connected: false,
  userToken: "",
  username: "",
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    connect: (state) => {
      state.connected = true;
    },
    disconnect: () => initialState,
    setToken: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
  }
})

export const { connect, disconnect, setToken, setUserName } = authSlice.actions
export default authSlice.reducer