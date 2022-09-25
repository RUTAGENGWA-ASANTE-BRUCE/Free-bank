import {configureStore} from '@reduxjs/toolkit';
import AuthenticationReducer from './slices/AuthenticationSlice';
import BuyingCryptoSlice from './slices/BuyingCryptoSlice';
import swapCryptoSlice from './slices/SwapCryptoSlice';
const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer,
    buyingCrypto: BuyingCryptoSlice,
    swapCrypto: swapCryptoSlice,
  },
});
export default store;
