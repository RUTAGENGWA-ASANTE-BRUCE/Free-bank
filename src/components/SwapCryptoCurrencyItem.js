import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from '@react-navigation/native';
import {
  selectCryptoFrom,
  selectCryptoTo,
  selectSwapForward,
  setCryptoFrom,
  setCryptoTo,
  setSwap,
} from '../redux/slices/SwapCryptoSlice';
import {useDispatch, useSelector} from 'react-redux';

const CryptoCurrencyItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage7d,
  logoUrl,
  sparkline,
  crypto,
}) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';
  const cryptoTo = useSelector(selectCryptoTo);
  const swapForward = useSelector(selectSwapForward);
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const cryptoFrom = useSelector(selectCryptoFrom);
  const onPressContinue = crypto => {
    if (cryptoFrom || swapForward === 'to') {
      if (swapForward === 'from') {
        dispatch(setCryptoFrom(crypto));
        navigator.navigate('SwapCrypto');
      } else {
        dispatch(setCryptoTo(crypto));
        navigator.navigate('SwapCrypto');
      }
    } else {
      dispatch(setCryptoFrom(crypto));
      navigator.navigate('SwapCrypto');
    }
  };
  return (
    <TouchableOpacity
      className={`my-1  bg-[#0F0F0F] m-0.5 p-2 rounded-lg w-full`}
      onPress={() => onPressContinue(crypto)}>
      <View style={styles.itemWrapper}>
        {/* Left side */}
        <View style={styles.leftWrapper}>
          <Image source={{uri: logoUrl}} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
          </View>
        </View>

        {/* Right side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>
            ${currentPrice.toLocaleString('en-US', {currency: 'USD'})}
          </Text>
          <Text style={[styles.subtitle, {color: '#808080'}]}>
            0 {symbol.toUpperCase()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    // width:95,
    color: 'white',
    fontSize: 12,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: '#A9ABB1',
  },
  rightWrapper: {
    alignItems: 'flex-end',
  },
});

export default CryptoCurrencyItem;
