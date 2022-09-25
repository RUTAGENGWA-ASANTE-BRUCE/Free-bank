import React from 'react';
import {View, StyleSheet, TouchableOpacity,ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {setServiceMode} from '../../redux/slices/BuyingCryptoSlice';

const BalanceHomeScreen = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const money = 0.0;

  const onPressBuyCrypto = () => {
    dispatch(setServiceMode('buy'));
    navigator.navigate('ChooseCrypto');
  };
  const onPressResceiveCrypto = () => {
    dispatch(setServiceMode('receive'));
    navigator.navigate('ChooseCrypto');
  };
  return (
    <ScrollView contentContainerStyle={{flex: 1,alignItems:'center',backgroundColor:'black'}}>
      <View className={`w-full justify-between mt-[40px] px-[32px] flex flex-row`}>
        <TouchableOpacity className={``}>
          <Feather color="#808080" name="settings" style={{fontSize: 24}} />
        </TouchableOpacity>
        <TouchableOpacity className={``}>
          <MaterialCommunityIcon
            color="#808080"
            name="message-text-outline"
            style={{fontSize: 24}}
          />
        </TouchableOpacity>
      </View>
      <Text className={` text-[#FFE600] text-center mt-[32px]`}>Balance</Text>
      {money.toString().split('.').length == 2 ? (
        <View className={`w-full text-center flex flex-row `}>
          {money
            .toString()
            .split('.')
            .map((text, i) => (
              <Text
                className={`text-[62px] font-[400] ${
                  i === 0
                    ? '#FFE600 text-right'
                    : 'text-yellow-700 text-left'
                } w-3/6`}>
                ${i === 0 ? text : `.${text}`}
              </Text>
            ))}
        </View>
      ) : (
        <View className={`w-full text-center flex flex-row`}>
          <Text className={` text-[62px] text-[#FFE600] text-right w-3/6`}>
            ${money}
          </Text>
          <Text className={`text-[62px] text-[#FF9900] text-left w-3/6`}>
            .00
          </Text>
        </View>
      )}
      <TouchableOpacity
        className={` mt-[6%]   w-36 justify-center items-center`}
        onPress={() => onPressBuyCrypto()}>
        <View
          className={`w-[64px] text h-[64px] py-3 rounded-full mx-auto justify-center items-center bg-[#FFE600]`}>
          <Feather style={{fontSize: 25}} color="black" name="credit-card" />
        </View>
        <Text
          className={` text-gray-300 mt-2 font-extralight text-center w-full  text-base`}>
          Buy your first {'\n'} crypto with cash
        </Text>
      </TouchableOpacity>
      <Text className={`text-gray-400 text-xl mt-[3%] text-center`}>OR</Text>
      <TouchableOpacity
        onPress={() => onPressResceiveCrypto()}
        className={`mt-[26px]  w-36 justify-center items-center`}>
        <View
          className={`w-[64px] text h-[64px] py-3 rounded-full mx-auto justify-center items-center bg-[#FFE600]`}>
          <AntDesign style={{fontSize: 25}} color="black" name="wallet" />
        </View>
        <Text
          className={`text-gray-300 mt-2 font-extralight text-center w-full  text-base`}>
          Receive crypto from {'\n'} an external wallet
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default BalanceHomeScreen;
