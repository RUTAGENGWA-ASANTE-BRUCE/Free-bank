import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native';
import KeyBoardAvoidingWrapper from '../../components/KeyBoardAvoidingWrapper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const VerifyMobileNumber = () => {
  const navigator = useNavigation();
  const [verificationCode, setVerificationCode] = useState('');
  const verificationCodeRef = useRef(null);
  const onPressContinue = () => {
    if (verificationCode === '') {
      verificationCodeRef.current.focus();
    } else {
      navigator.navigate('CreatePassword');
    }
  };
  return (
    <KeyBoardAvoidingWrapper>
      <View className="w-full h-full bg-black">
        <TouchableOpacity
          className="mt-[30px]  ml-[23px] w-10"
          onPress={() => navigator.navigate('ProvideMobileNumber')}>
          <AntDesign
            color="white"
            name="arrowleft"
            style={{fontSize: 24}}
          />
        </TouchableOpacity>
        <View className="px-[32px] flex-1">
          <Text className="text-2xl text-[#FFE600] mt-[30px] font-[500]">
            Verify mobile no.
          </Text>
          <Text className="text-[#AEAEAE] font-extralight mt-[8px]">
            Please enter the verififcation code we just sent to you on
            +4498484113
          </Text>
          <TextInput
            className="h-[52px] w-full rounded-[16px]  p-4 bg-white text-black mt-[44px] text-base"
            placeholder="e.g 123456"
            ref={verificationCodeRef}
            keyboardType="number-pad"
            onChangeText={text => setVerificationCode(text)}
            onSubmitEditing={() => onPressContinue()}
          />
        </View>
      </View>
    </KeyBoardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({});

export default VerifyMobileNumber;
