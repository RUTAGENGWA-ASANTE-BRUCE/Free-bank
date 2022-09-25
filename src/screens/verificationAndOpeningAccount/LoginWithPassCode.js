import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import InputOTPService from '../../components/InputOTPService';
import {useDispatch} from 'react-redux';
import {setUserPassCode} from '../../redux/slices/AuthenticationSlice';
const LoginWithPassCodeScreen = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const [passCode, setPassCode] = useState('');
  const passCodeRef = useRef(null);

  const onPressContinue = () => {
      navigator.navigate('Portfolio');
  };
  return (
    <ScrollView className={`h-full w-full bg-black px-[32px`}>
      <Text className="text-2xl text-[#FFE600] mt-[10%] text-center font-[500]">
        Enter your passcode
      </Text>
      <Text className="text-[#AEAEAE] font-extralight mt-[8px] text-center">
        This is to securely login your account
      </Text>
      <TouchableOpacity className={` absolute justify-center items-center  top-[43%] w-full`}>
        <Text className="text-[#FF9900] ">
          Forgot passcode?
        </Text>
      </TouchableOpacity>
      <View className="pb-10">

      <InputOTPService
        onPressContinue={onPressContinue}
        passCode={passCode}
        setPassCode={setPassCode}
      />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default LoginWithPassCodeScreen;
