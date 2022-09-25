import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userFullName: null,
  userEmail: null,
  userPhoneNumber: null,
  userPassCode: null,
  userDOB: null,
  userAddress: null,
};

//actions
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUserFullName: (state, action) => {
      state.userFullName = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setUserPhoneNumber: (state, action) => {
      state.userPhoneNumber = action.payload;
    },
    setUserPassCode: (state, action) => {
      state.userPassCode = action.payload;
    },
    setUserDOB: (state, action) => {
      state.userDOB = action.payload;
    },
    setUserAddress: (state, action) => {
      state.userAddress = action.payload;
    },
  },
});

export const {
  setUserFullName,
  setUserEmail,
  setUserPhoneNumber,
  setUserPassCode,
  setUserDOB,
  setUserAddress,
} = authenticationSlice.actions;

//selectors

export const selectUserFullName = state => state.authentication.userFullName;
export const selectUserEmail = state => state.authentication.userEmail;
export const selectUserPhoneNumber = state =>
  state.authentication.userPhoneNumber;
export const selectUserPassCode = state => state.authentication.userPassCode;
export const selectUserDOB = state => state.authentication.userDOB;
export const selectUserAddress = state => state.authentication.userAddress;

export default authenticationSlice.reducer;
