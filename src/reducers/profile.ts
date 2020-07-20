import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProfileState {
  id: string,
  email: string,
  name: string,
  avatar: string,
  errorMsg: string | null
}

const initialState: ProfileState = {
  id: '123',
  email: '',
  name: '',
  avatar: '',
  errorMsg: null
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileId(state, action: PayloadAction<string>) {
      state.id = action.payload
    },
    getProfileSuccess(state, action: PayloadAction<ProfileState>) {
      Object.assign(state, action.payload)
    },
    getProfileFailure(state, action: PayloadAction<string>) {
      state.errorMsg = action.payload
    }
  }
})

export const { setProfileId, getProfileSuccess, getProfileFailure } = profileSlice.actions

export default profileSlice.reducer
