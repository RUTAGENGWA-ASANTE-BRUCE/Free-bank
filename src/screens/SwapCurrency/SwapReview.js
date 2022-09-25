import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SwapCryptoCurrencyItem from '../../components/SwapCryptoCurrencyItem';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomNumberPad from '../../components/CustomNumberPad';
import {selectSwap} from '../../redux/slices/SwapCryptoSlice';
import {useDispatch, useSelector} from 'react-redux';
const SwapCrypto = () => {
  const navigator = useNavigation();
  // const selectedCrypto = useSelector(selectSelectedCrypto);
  const onPressContinue = crypto => {
    //   dispatch(setAmount(crypto));
    navigator.navigate('Portfolio');
  };
  const [amount, setAmount] = useState('');
  const swap = useSelector(selectSwap);
  return (
    <ScrollView className="h-full w-full bg-black ">
      <View className={`w-full flex flex-row m-2 mt-5`}>
        <TouchableOpacity className="mt-2" onPress={() => navigator.navigate('Portfolio')}>
          <AntDesign color="white" name="close" style={{fontSize: 24}} />
        </TouchableOpacity>
        <Text className={` text-center mt-2 flex-1 text-white`}>
          Swap review
        </Text>
      </View>
      <View className="px-[22px] flex-1 mt-5 items-center">
        <SwapCryptoCurrencyItem
          name={swap.name}
          symbol={swap.symbol}
          currentPrice={swap.current_price}
          priceChangePercentage7d={swap.price_change_percentage_7d_in_currency}
          logoUrl={swap.image}
          sparkline={swap.sparkline_in_7d.price}
          crypto={swap}
          key={swap.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SwapCrypto;
