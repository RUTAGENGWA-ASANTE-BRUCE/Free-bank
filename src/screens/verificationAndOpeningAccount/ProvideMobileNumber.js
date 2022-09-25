import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import KeyBoardAvoidingWrapper from '../../components/KeyBoardAvoidingWrapper';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {setUserPhoneNumber} from '../../redux/slices/AuthenticationSlice';
import PhoneInput from 'react-native-phone-number-input';
const ProvideMobileNumber = () => {
  const navigator = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const phoneNumberInput = useRef(null);
  const countryCodeInput = useRef(null);
  const dispatch = useDispatch();
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const onPressContinue = () => {
    if (phoneNumber === '') {
      phoneNumberInput.current.focu();
    }
    if (countryCode === '') {
      countryCodeInput.current.focus();
    } else {
      dispatch(setUserPhoneNumber(`${countryCode}${phoneNumber}`));
      navigator.navigate('VerifyMobileNumber');
    }
  };

  return (
    <KeyBoardAvoidingWrapper>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <TouchableOpacity
          className="mt-[30px] ml-[23px] w-10"
          onPress={() => navigator.navigate('CheckEmail')}>
          <AntDesign
            color="white"
            name="arrowleft"
            style={{fontSize: 24}}
            classnames="mt-8 ml-2"
          />
        </TouchableOpacity>
        <View className="px-[32px] flex-1 items-center">
          <Text className="text-2xl text-[#FFE600] text-left w-full mt-10 font-[500]">
            Mobile no.
          </Text>

          <Text className="text-[#AEAEAE] font-extralight mt-[8px]">
            Please provide your mobile number. We will send you a verification
            code shortly.
          </Text>

          <View className="mt-[32px] w-full flex flex-row space-x-1.5">
            <TextInput
              ref={countryCodeInput}
              maxLength={3}
              keyboardType="number-pad"
              onChangeText={text => setCountryCode(text)}
              className="h-[52px] w-[62px] rounded-[16px]  p-4 bg-white text-black mt-[28px] text-base"
            />
            <TextInput
              ref={phoneNumberInput}
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={text => setPhoneNumber(text)}
              className="h-[52px] flex-1 rounded-[16px]  p-4 bg-white text-black mt-[28px] text-base"
            />
          </View>

          <TouchableOpacity
            className=" bg-[#FFE600]  h-[52px] rounded-[26px] w-full justify-center items-center mt-[132px] mb-[25px]"
            onPress={() => onPressContinue()}>
            <Text className="text-black text-[18px]">Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyBoardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({});

export default ProvideMobileNumber;
