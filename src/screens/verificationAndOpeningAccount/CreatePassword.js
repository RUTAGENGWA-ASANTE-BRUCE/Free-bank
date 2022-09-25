import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Text} from 'react-native-elements';
import InputOTPService from '../../components/InputOTPService';
import {useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {setUserPassCode} from '../../redux/slices/AuthenticationSlice';

const CreatePassword = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const [passCode, setPassCode] = useState('');
  const onPressContinue = () => {
    dispatch(setUserPassCode(passCode));
    navigator.navigate('ProvideNames');
  };

  return (
    <ScrollView
 contentContainerStyle={{
      backgroundColor: 'black',
      padding: 4,
      flex: 1,
    }}>
      <TouchableOpacity
        className={`mt-[30px] ml-[23px] w-10`}
        onPress={() => navigator.navigate('VerifyMobileNumber')}>
      <AntDesign
          color="white"
          name="arrowleft"        style={tw`text-white text-2xl`}
        />
      </TouchableOpacity>
      <View className="px-[22px] flex-1 items-center">
        <Text className="text-2xl text-[#FFE600] mt-[30px] text-center font-[500]">
          Create a password
        </Text>

        <Text className="text-[#AEAEAE] font-extralight mt-[8px] text-center">
          This is to securely create your account
        </Text>
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

export default CreatePassword;
