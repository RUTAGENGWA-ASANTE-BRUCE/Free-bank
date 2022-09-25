import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import tw from 'tailwind-react-native-classnames';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomNumberPad from '../../components/CustomNumberPad';
import {
  selectCryptoFrom,
  selectCryptoTo,
  setSwap,
  setSwapForward,
} from '../../redux/slices/SwapCryptoSlice';
import {useDispatch, useSelector} from 'react-redux';
const SwapCrypto = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const selectedCryptoTo = useSelector(selectCryptoTo);
  const selectedCryptoFrom = useSelector(selectCryptoFrom);
  const onPressContinue = crypto => {
    dispatch(setSwap(crypto));
    navigator.navigate('SwapReview');
  };
  const [amount, setAmount] = useState('');
  const chooseCrytoFrom = () => {
    dispatch(setSwapForward('from'));
    navigator.navigate('ChooseSwapCrypto');
  };
  const chooseCryptoTo = () => {
    dispatch(setSwapForward('to'));
    navigator.navigate('ChooseSwapCrypto');
  };
  useEffect(() => {
    const checkSelectedCrypto = () => {
      if (!selectedCryptoTo || !selectedCryptoFrom) {
        navigator.navigate('ChooseSwapCrypto');
      }
    };
    checkSelectedCrypto();
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'black',
        padding: 4,
        flex: 1,
        alignItems: 'center',
      }}>
      <View className={`w-full flex flex-row ml-5 mt-[10px]`}>
        <TouchableOpacity onPress={() => navigator.navigate('Portfolio')}>
          <AntDesign
            color="white"
            name="close"
            style={{fontSize: 24, marginTop: 7}}
          />
        </TouchableOpacity>
        <Text className={` text-center mt-2 flex-1 text-white`}>
          Swap Currency
        </Text>
      </View>
      <View className="px-[22px] flex-1 items-center ">
        <View className={`w-[80%] flex flex-row mt-1 `}>
          <Text
            className={`text-[13px] px-1.5 pt-1 rounded-2xl  text-white border border-white h-7 font-[500]`}
            style={tw`my-auto`}>
            max
          </Text>
          <View className={``}>
            <Text className={`text-[24px] text-[#FFE600] text-center`}>
              {selectedCryptoFrom?.symbol.toUpperCase()}
            </Text>
            <Text
              className={` mx-3 ${
                amount.length <= 4 ? 'text-[53px]' : 'text-[40px]'
              }  text-[#5f5d49] text-center w-48`}>
              {amount === '' ? 0 : amount}
            </Text>
            <Text className={`text-[18px] text-[#FF9900] text-center`}>
              {amount === '' ? 0 : amount}{' '}
              {selectedCryptoTo?.symbol.toUpperCase()}
            </Text>
          </View>
          <View style={tw`my-auto`}>
            <AntDesign
              style={{rotation: 90, fontSize: 32}}
              color="#AEAEAE"
              name="swap"
            />
          </View>
        </View>
        <View className="flex flex-row justify-center w-full  mt-[4%] relative">
          <Pressable
            onPress={() => chooseCrytoFrom()}
            className="w-[49%] relative left-0 rounded-[16px] mr-2 justify-center items-center bg-[#2C2C2C] h-[81px]">
            <View className="flex flex-row">
              <Image
                source={{uri: selectedCryptoFrom?.image}}
                className="w-7 h-7  rounded-full mr-1"
              />
              <Text className="text-white text-[18px] font-[500">
                {selectedCryptoFrom?.symbol.toUpperCase()}
              </Text>
            </View>
            <Text className="text-[#808080] text-[13px]">Bal 0.33130457</Text>
          </Pressable>
          <View className="w-7 h-7 rounded-full z-50 bg-black mt-5 absolute justify-center items-center ">
            <FontAwesome5
              style={{fontSize: 15}}
              color="white"
              name="arrow-right"
            />
          </View>
          <Pressable
            onPress={() => chooseCryptoTo()}
            className="w-[49%] relative  right-0 rounded-[16px] justify-center items-center bg-[#2C2C2C] h-[81px]">
            <View className="flex flex-row">
              <Image
                source={{uri: selectedCryptoTo?.image}}
                className="w-7 h-7  rounded-full mr-1"
              />
              <Text className="text-white text-[18px] font-[500">
                {selectedCryptoTo?.symbol.toUpperCase()}
              </Text>
            </View>
            <Text className="text-[#808080] text-[13px]">Bal 0</Text>
          </Pressable>
        </View>
        <CustomNumberPad value={amount} maxLength={7} setValue={setAmount} />
        <View className="absolute bottom-[3%] w-full">

        <TouchableOpacity
          onPress={() => onPressContinue(selectedCryptoFrom)}
          className={` bg-[#FFE600] h-[52px] rounded-[26px]   w-full justify-center items-center`}>
          <Text className="text-black text-[18px]">Review swap</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SwapCrypto;
