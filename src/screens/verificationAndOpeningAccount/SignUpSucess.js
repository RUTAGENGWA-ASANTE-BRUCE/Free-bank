import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignUpSucess = () => {
  const navigator = useNavigation();
  return (
    <View className={`h-full w-full bg-black`}>
      <View className="px-[22px] flex-1 items-center">
        <Image
          source={require('../../assets/congratsFlowers.png')}
          className={`mt-[138px] h-32 w-32 `}
        />
        <Text className="text-[#FFE600] text-2xl text-center mx-auto w-5/6 mt-[38.2px] font-[500]">
          Congratulations you're on our waitlist
        </Text>
        <Text className="text-[#AEAEAE] mt-[16px] text-center">
          We'll send you a message when your account is ready to use.
        </Text>
        <TouchableOpacity
          className=" bg-[#FFE600]  h-[52px] rounded-[26px] w-full absolute bottom-[40px] justify-center items-center"
          onPress={() => navigator.navigate('LoginWithPassCode')}>
          <Text className="text-black text-[18px]">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpSucess;
