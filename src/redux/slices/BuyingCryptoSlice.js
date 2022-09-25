import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  serviceMode: null,
  selectedCrypto: null,
  paymentDetails: null,
  cards: [],
  amount: 0,
  cryptoWallet: [],
  selectedCard: null,
  cryptoMarketData: null,
};

//actions
export const buyingCryptoSlice = createSlice({
  name: 'buyingCrypto',
  initialState,
  reducers: {
    setServiceMode: (state, action) => {
      state.serviceMode = action.payload;
    },
    setSelectedCrypto: (state, action) => {
      state.selectedCrypto = action.payload;
    },
    setCryptoWallet: (state, action) => {
      const cryptoCurrencyIndex = state.cryptoWallet.findIndex(
        currency => currency.name === action.payload.name,
      );
      if (cryptoCurrency) {
        state.cryptoWallet[cryptoCurrencyIndex] = action.payload;
      } else {
        state.cryptoWallet.push(action.payload);
      }
    },
    setAmount: (state, action) => {
      state.amount += action.payload;
    },
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setCryptoMarketData: (state, action) => {
      state.cryptoMarketData = action.payload;
    },
  },
});

export const {
  setSelectedCrypto,
  setAmount,
  setSelectedCard,
  setCards,
  setServiceMode,
  setCryptoMarketData,
  setCryptoWallet,
} = buyingCryptoSlice.actions;

//selectors

export const selectServiceMode = state => state.buyingCrypto.serviceMode;
export const selectSelectedCrypto = state => state.buyingCrypto.selectedCrypto;
export const selectAmount = state => state.buyingCrypto.amount;

export const seletectSelectedCard = state => state.buyingCrypto.selectedCard;

export const selectCards = state => state.buyingCrypto.cards;

export const selectCryptoMarketData = state =>
  state.buyingCrypto.cryptoMarketData;

export const selectCryptoWallet = state => state.buyingCrypto.cryptoWallet;
export default buyingCryptoSlice.reducer;
