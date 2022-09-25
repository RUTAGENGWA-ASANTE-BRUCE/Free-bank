import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  swapForward: null,
  cryptoFrom: null,
  cryptoTo: null,
  swap: null,
};

//actions
export const swapCryptoSlice = createSlice({
  name: 'swapCrypto',
  initialState,
  reducers: {
    setSwapForward: (state, action) => {
      state.swapForward = action.payload;
    },
    setCryptoFrom: (state, action) => {
      state.cryptoFrom = action.payload;
    },
    setCryptoTo: (state, action) => {
      state.cryptoTo = action.payload;
    },
    setSwap: (state, action) => {
      state.swap = action.payload;
    },
  },
});

export const {setCryptoFrom, setCryptoTo, setSwap, setSwapForward} =
  swapCryptoSlice.actions;

//selectors

export const selectSwapForward = state => state.swapCrypto.swapForward;
export const selectCryptoFrom = state => state.swapCrypto.cryptoFrom;
export const selectCryptoTo = state => state.swapCrypto.cryptoTo;
export const selectSwap = state => state.swapCrypto.swap;

export default swapCryptoSlice.reducer;
