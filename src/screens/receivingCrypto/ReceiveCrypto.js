import React, {useState} from 'react';
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
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import QRCode from 'react-native-qrcode-svg';
import {selectSelectedCrypto} from '../../redux/slices/BuyingCryptoSlice';
const ReceiveCrypto = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const selectedCrypto = useSelector(selectSelectedCrypto);
  const walletAddress = 'Oxa5EcD...9291Ec649';
  return (
    <ScrollView contentContainerStyle={{backgroundColor:'black',height:"100%",padding:4,flex:1,alignItems:'center'}}>
      <View className={`w-full flex flex-row mt-[15px] ml-[8px]`}>
        <TouchableOpacity
          className={`w-10 mt-1.5`}
          onPress={() => navigator.navigate('ChooseCrypto')}>
          <AntDesign
            color="white"
            name="arrowleft"
            style={{fontSize: 24}}
          />
        </TouchableOpacity>
        <View className={`w-8/12 flex flex-row ml-10  `}>
          <Text className={` text-white mr-1 mt-2`}>Receive</Text>
          <Image source={{uri: selectedCrypto.image}} style={styles.image} />
          <Text className={` text-white ml-1 mt-2`}>{selectedCrypto.name}</Text>
        </View>
      </View>
      <View className="w-[95%] flex-1">
        
      <Text className={`text-2xl text-yellow-400 font-[500]  mt-[3%] ml-2`}>
        Send your {selectedCrypto.symbol.toUpperCase()} to this address...
      </Text>
      <View className={`mt-[3%] p-3 bg-white w-[165px] rounded-xl `} style={tw`mx-auto`}>
        <QRCode
          value={walletAddress}
          size={140}
          color="black"
          logo={require('../../assets/logo.png')}
          logoBackgroundColor="black"
          logoMargin={10}
          logoSize={35}
          logoBorderRadius={30}
          backgroundColor="white"></QRCode>
      </View>
      <View className={`mt-[2%] pb-2 border-b border-[#F7931B]`}>
        <Text className={`text-white`}>Address</Text>
        <Text className={`text-[22px] font-[500] mt-0.5 text-white`}>
          {walletAddress}
        </Text>
        <Text className={`text-[#808080] text-[13px] mt-[2%] `}>
          Only send {selectedCrypto.name} ({selectedCrypto.symbol.toUpperCase()}
          ) to this address
        </Text>
      </View>
      <Text className={`text-[#808080] text-[13px] mt-[3%] `}>
        Your current {selectedCrypto.symbol.toUpperCase()} balance.
      </Text>
      <View className={`w-full flex flex-row mt-[2%] justify-between  bg-[#0F0F0F] items-center p-1.5 rounded-xl`}>
        <View className={` flex flex-row  `}>
          <Image source={{uri: selectedCrypto.image}} style={styles.image} />
          <Text className={`text-[18px] text-[#AEAEAE] ml-2`}>
            {selectedCrypto.name}
          </Text>
        </View>
        <View className={``}>
          <Text className={`text-white text-[24px] font-[600]`}>$0.00</Text>
          <Text className={`text-[#808080] text-[13px] `}>
            0 {selectedCrypto.symbol.toUpperCase()}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        className=" bg-[#FFE600]  h-[52px] rounded-[26px] my-32 w-full justify-center items-center"
        onPress={() => navigator.navigate('BalanceHomeScreen')}>
        <Text className="text-black text-[18px]">Copy address</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 38,
    width: 38,
  },
});

export default ReceiveCrypto;
