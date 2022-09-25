import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {
  selectCards,
  setCards,
  setSelectedCard,
} from '../../redux/slices/BuyingCryptoSlice';
import KeyBoardAvoidingWrapper from '../../components/KeyBoardAvoidingWrapper';
const PaymentDetails = () => {
  const navigator = useNavigation();
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExperationDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [postCode, setPostCode] = useState('');

  const nameOnCardRef = useRef(null);
  const cardNumberRef = useRef(null);
  const expirationDateRef = useRef(null);
  const cvcRef = useRef(null);
  const postCodeRef = useRef(null);
  const cards = useSelector(selectCards);
  const dispatch = useDispatch();
  const onPressContinue = () => {
    if (nameOnCard === '') {
      nameOnCardRef.current.focus();
    } else if (cardNumber === '') {
      cardNumberRef.current.focus();
    } else if (expirationDate === '') {
      expirationDateRef.current.focus();
    } else if (cvc === '') {
      cvcRef.current.focus();
    } else if (postCode === '') {
      postCodeRef.current.focus();
    } else {
      const newCard = {
        nameOnCard,
        cardNumber,
        expirationDate,
        cvc,
        postCode,
      };
      dispatch(setCards([...cards, newCard]));
      dispatch(setSelectedCard(newCard));
      navigator.navigate('ProvideAmount');
    }
  };
  return (
    <KeyBoardAvoidingWrapper>
      <View className={`w-full flex flex-row m-2 mt-5`}>
        <TouchableOpacity
          style={tw``}
          onPress={() => navigator.navigate('ChooseCrypto')}>
          <AntDesign
            color="white"
            name="close"
            style={tw`text-white text-xl`}
          />
        </TouchableOpacity>
        <Text style={tw`w-5/6 text-center mt-2 mx-auto text-white`}>
          Payment details
        </Text>
      </View>
      <View className="px-[22px] flex-1 items-center">
        <View style={tw`mt-5 w-full`}>
          <Text className="text-[#AEAEAE] text-left font-extralight text-[13px]">
            Name on card
          </Text>
          <TextInput
            ref={nameOnCardRef}
            onChangeText={text => setNameOnCard(text)}
            className="h-[52px] w-full rounded-[16px]  p-4 bg-white text-black mt-2 text-base"
          />
        </View>

        <View style={tw`mt-5 w-full`}>
          <Text className="text-[#AEAEAE] text-left font-extralight text-[13px]">
            Card number
          </Text>
          <View className="flex flex-row h-[52px] w-full rounded-[16px] bg-white justify-center items-center">
            
          <TextInput
            ref={cardNumberRef}
            keyboardType={'number-pad'}
            onChangeText={text => setCardNumber(text)}
            className=" text-black mt-2 text-base w-[75%] mr-2"
          />
          <Image source={{uri:'https://e7.pngegg.com/pngimages/83/811/png-clipart-mastercard-visa-payment-business-credit-card-mastercard-text-trademark.png'}} className="w-9 h-9" />
          </View>
        </View>
        <View style={tw`flex flex-row mt-5 w-full`}>
          <View>
            <Text className="text-[#AEAEAE] text-left font-extralight text-[13px]">
              Expiration
            </Text>
            <TextInput
              className="h-[52px] w-20 rounded-[16px]  p-4 bg-white text-black mt-2 text-base"
              keyboardType="number-pad"
              maxLength={5}
              ref={expirationDateRef}
              onChangeText={text => setExperationDate(text)}
            />
          </View>
          <View style={tw`ml-3`}>
            <Text className="text-[#AEAEAE] text-left font-extralight text-[13px]">
              CVC
            </Text>
            <TextInput
              keyboardType={'number-pad'}
              className="h-[52px] w-16 rounded-[16px]  p-4 bg-white text-black mt-2 text-base"
              keyboardType="number-pad"
              maxLength={3}
              ref={cvcRef}
              onChangeText={text => setCvc(text)}
            />
          </View>
        </View>
        <View style={tw`mt-5 mb-20 w-full`}>
          <Text className="text-[#AEAEAE] text-left font-extralight text-[13px]">
            Postcode
          </Text>
          <TextInput
            ref={postCodeRef}
            onChangeText={text => setPostCode(text)}
            className="h-[52px] w-[154px] rounded-[16px]  p-4 bg-white text-black mt-2 text-base"
          />
        </View>
        <TouchableOpacity
          className=" bg-[#FFE600] absolute bottom-[3%] h-[52px] rounded-[26px] w-full justify-center items-center"
          onPress={() => onPressContinue()}>
          <Text className="text-black text-[18px]">Add card</Text>
        </TouchableOpacity>
      </View>
    </KeyBoardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({});

export default PaymentDetails;
