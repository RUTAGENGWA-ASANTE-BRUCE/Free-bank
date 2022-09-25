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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  selectSelectedCrypto,
  seletectSelectedCard,
} from '../../redux/slices/BuyingCryptoSlice';
const ReviewPurchase = () => {
  const selectedCrypto = useSelector(selectSelectedCrypto);
  const selectedCard = useSelector(seletectSelectedCard);
  const navigator = useNavigation();

  return (
    <ScrollView
       contentContainerStyle={{backgroundColor:'black',padding:4,flex:1,alignItems:'center'}}
      >
      <View className={`w-full flex flex-row mt-[20px] ml-[23px]`}>
        <TouchableOpacity
          className={`w-10`}
          onPress={() => navigator.navigate('ChooseCrypto')}>
          <FontAwesome
            color="white"
            name="long-arrow-left"
            style={{fontSize: 24}}
          />
        </TouchableOpacity>
        <Text className={` w-full text-left mx-12 text-white`}>
          Review purchase
        </Text>
      </View>
      <View className={`mt-[22%] flex flex-row justify-between m-auto w-5/6`}>
        <View className={`w-[83px] h-[83px] rounded-full justify-center items-center p-2 bg-[#2C2C2C]`}>
        <Image source={{uri:'https://e7.pngegg.com/pngimages/83/811/png-clipart-mastercard-visa-payment-business-credit-card-mastercard-text-trademark.png'}} className="w-9 h-9" />

          <Text className={`text-[13px] mt-0.5 text-white w-12`}>
          ....{selectedCard.cardNumber.slice(-5,-1)}          </Text>
        </View>
        <FontAwesome
          style={{fontSize: 30, marginTop: 35}}
          color="#808080"
          name="long-arrow-right"
        />
        <View
          className={`border-2 bg-[#2C2C2C] w-[85px] h-[85px] justify-center items-center  rounded-full`}>
          <Image
            source={{uri: selectedCrypto.image}}
            className={`w-[64px] h-[64px] rounded-full`}
          />
        </View>
      </View>
      
      <View className={`pb-2 border-b border-[#FFE600] mt-[22%] w-[93%] `}>
        <View className={`w-full flex flex-row justify-between mt-2`}>
          <Text className={`text-[#AEAEAE] font-[500] text-[16.5px]`}>
            Buy {selectedCrypto.name}
          </Text>
          <Text className={`text-[#AEAEAE] font-[500] text-[16.5px]`}>
            0.066 BTC
          </Text>
        </View>

        <View className={`w-full flex flex-row justify-between mt-2`}>
          <Text className={`text-[#AEAEAE] font-[500] text-[16.5px]`}>
            Best market price
          </Text>
          <Text className={`text-[#AEAEAE] font-[500] text-[16.5px]`}>
            $1,495.65
          </Text>
        </View>

        <View className={`w-full flex flex-row justify-between mt-2`}>
          <Text className={`text-[#AEAEAE] font-[500] text-[16.5px]`}>
            Bank fee
          </Text>
          <Text className={`text-[#AEAEAE] font-[500] text-[16.5px]`}>
            $5.35
          </Text>
        </View>
      </View>

      <View className={`w-[93%] flex flex-row mt-3 justify-between `}>
        <Text className={`text-white font-[500] text-[16.5px]`}>
          Total
        </Text>
        <Text className={`text-[#FFE600] font-[500] text-[16.5px]`}>
          $1,500
        </Text>
      </View>
      <TouchableOpacity
        className=" bg-[#FFE600]  h-[52px] rounded-[26px] w-[93%] absolute bottom-[5%]  justify-center items-center"
        onPress={() => navigator.navigate('SuccessfullyPurchased')}>
        <Text className="text-black text-[18px]">Buy now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ReviewPurchase;
