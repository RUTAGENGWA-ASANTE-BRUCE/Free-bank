import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Pressable,
  ScrollView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {
  selectCards,
  selectSelectedCrypto,
  seletectSelectedCard,
} from '../../redux/slices/BuyingCryptoSlice';
import CustomNumberPad from '../../components/CustomNumberPad';

const buttons = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '.',
  '0',
  <FontAwesome
    color="white"
    name="long-arrow-left"
    style={{fontSize:32}}
  />,
];

const ProvideAmount = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const selectedCrypto = useSelector(selectSelectedCrypto);
  const onPressContinue = (crypto) => {
    dispatch(setAmount(crypto));
    navigator.navigate('ProvidePaymentDetails');
  };
  const [amount, setAmount] = useState('');
  const [convertedAmount,setConvertedAmount]= useState('');
  const selectedCard = useSelector(seletectSelectedCard);
  const cards = useSelector(selectCards);
  return (
    <ScrollView contentContainerStyle={{backgroundColor:'black',paddingHorizontal:15,flex:1,alignItems:'center'}}>
      <View   className={` mt-[20px] flex flex-row`}>
        <TouchableOpacity
          className={``}
          onPress={() => navigator.navigate('ChooseCrypto')}>
          <FontAwesome
            color="white"
            name="long-arrow-left"
            style={{fontSize:24}}
          />
        </TouchableOpacity>
        <View className={`w-8/12 mx-auto flex flex-row ml-20 `}>
          <Text className={` text-white mr-1 mt-2`}>Buy</Text>
          <Image source={{uri: selectedCrypto.image}} style={styles.image} />
          <Text className={` text-white ml-1 mt-2`}>
            {selectedCrypto.name}
          </Text>
        </View>
      </View>

      <View className={`w-full flex flex-row mt-[3%]`}>
        <View className={`w-9/12`}>
          <Text className={`${amount.length<=5?'text-[62px]':'text-[40px]'} w-full text-yellow-400 text-center`}>
            ${amount===''?0:amount}
          </Text>
          <Text className={`text-xl text-yellow-700 text-center`}>
            {amount} {selectedCrypto.symbol.toUpperCase()}
          </Text>
        </View>
        <AntDesign style={{fontSize:32,marginTop:15,rotation:90,marginLeft:3}}  color="#AEAEAE" name="swap" />
      </View>
    <View className=''>

   <CustomNumberPad value={amount} maxLength={7} setValue={setAmount} />
    </View>
    <View className="flex flex-col absolute px-4 bottom-0">

      {selectedCard ? (
        <TouchableOpacity
          onPress={() => {
          
              navigator.navigate('PaymentDetails');
            
          }}
          className={`w-full flex flex-row justify-between px-4 py-1 rounded-[18px] items-center   bg-[#0F0F0F] h-[75px]`}>
          <Image source={{uri:'https://e7.pngegg.com/pngimages/83/811/png-clipart-mastercard-visa-payment-business-credit-card-mastercard-text-trademark.png'}} className="w-9 h-9" />

          <Text className={`text-xl text-white w-44 ml-3`}>
            ....{selectedCard.cardNumber.slice(-5,-1)}
          </Text>
          <Feather
             style={{fontSize:32}}
            color="#AEAEAE"
            name="chevron-down"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (cards.length === 0) {
              navigator.navigate('PaymentDetails');
            }
          }}
          className={`w-full flex flex-row justify-between px-4 py-1 rounded-[18px] items-center   bg-[#0F0F0F] h-[75px]`}>
          <Feather style={{fontSize:32}} color={'#FFC700'} name="credit-card" />
          <Text className={`text-xl text-yellow-400 ml-3`}>Add payment card</Text>
          <Feather
            style={{fontSize:32}}
            color="#AEAEAE"
            name="chevron-down"
          />
        </TouchableOpacity>
      )}
      {selectedCard ? (
        <TouchableOpacity
        
            className=" bg-[#FFE600]  h-[52px] rounded-[26px] w-full mt-[15px] mb-[4%]  justify-center items-center"
          onPress={() => navigator.navigate('ReviewPurchase')}>
          <Text className={`text-black font-semibold mx-auto text-lg`}>
            Review & Buy
          </Text>
        </TouchableOpacity>
      ) : (
        <View
        
        className=" bg-[#FFE600] opacity-50 h-[52px] rounded-[26px] w-full mt-[15px] mb-[4%]  justify-center items-center"
        >
          <Text className="text-black text-[18px]">
            Continue
          </Text>
      </View>
      )}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
});

export default ProvideAmount;
