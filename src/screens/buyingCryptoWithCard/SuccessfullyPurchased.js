import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {selectSelectedCrypto} from '../../redux/slices/BuyingCryptoSlice';

const SuccessfullyPurchased = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const selectedCrypto = useSelector(selectSelectedCrypto);
  return (
    <ScrollView
             contentContainerStyle={{backgroundColor:'black',padding:4,flex:1,alignItems:'center'}}>
      <View  className={`w-full flex flex-row mt-[20px] ml-[23px]`}>
        <TouchableOpacity
          className={`w-10`}
          onPress={() => navigator.navigate('ChooseCrypto')}>
          <AntDesign color="white" name="close" style={{fontSize: 24}} />
        </TouchableOpacity>
        <Text className={` w-5/6 text-center mx-auto text-white`}>
          Purchase COmplete
        </Text>
      </View>

      <View className={`relative mt-[40%] mx-auto`}>
        <Image
          source={{uri: selectedCrypto.image}}
          className={`w-[102px] h-[102px]  rounded-full`}
        />
        <View
          className={`w-[48px] h-[48px] rounded-[788px] absolute border-[4px] border-black bg-[#FFE600] justify-center items-center  -right-4`}>
          <AntDesign style={{fontSize: 30}} color="black" name="check" />
        </View>
      </View>

      <View className={`w-full text-center flex flex-row mt-2`}>
        <Text className={`text-[24px] text-[#FFE600] text-right w-3/6`}>
          0.066
        </Text>
        <Text className={`text-[24px] text-[#FF9900] text-left w-3/6 ml-2`}>
          {selectedCrypto.symbol.toUpperCase()}
        </Text>
      </View>
      <Text className={`text-[#AEAEAE] text-center mt-1`}>
        added to your portfolio
      </Text>
      <TouchableOpacity
        className=" bg-[#FFE600]  h-[52px] rounded-[26px] w-[95%] absolute bottom-[5%] justify-center items-center"
        onPress={() => navigator.navigate('Portfolio')}>
        <Text className="text-black text-[18px]">View portfolio</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SuccessfullyPurchased;
