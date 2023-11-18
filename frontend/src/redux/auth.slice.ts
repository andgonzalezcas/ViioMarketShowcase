import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store'

interface initialStateProps {
  connected: boolean,
  userToken: string,
  username: string,
  sessionExpireIn: number
}

const initialState: initialStateProps = {
  connected: false,
  userToken: "",
  username: "",
  sessionExpireIn: 0.1,
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
    setSessionExpireIn: (state, action: PayloadAction<number>) => {
      state.sessionExpireIn = action.payload
    },
  }
})

export const { connect, disconnect, setToken, setUserName, setSessionExpireIn } = authSlice.actions

export const isConnected = (state: RootState) => state.auth.connected
export const selectToken = (state: RootState) => state.auth.userToken
export const selectUsername = (state: RootState) => state.auth.username
export const selectSessionExpireIn = (state: RootState) => state.auth.sessionExpireIn

export default authSlice.reducer