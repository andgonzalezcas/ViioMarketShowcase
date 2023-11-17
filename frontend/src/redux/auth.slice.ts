import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store'

interface initialStateProps {
  connected: boolean,
  userToken: string,
  username: string,
}

const initialState: initialStateProps = {
  connected: false,
  userToken: "",
  username: "",
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    connect: (state) => { state.connected = true; },
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

export const isConnected = (state: RootState) => state.auth.connected
export const selectToken = (state: RootState) => state.auth.userToken
export const selectUsername = (state: RootState) => state.auth.username

export default authSlice.reducer