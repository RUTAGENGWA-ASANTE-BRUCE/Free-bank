import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useDispatch} from 'react-redux';
import {setUserEmail} from '../../redux/slices/AuthenticationSlice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import KeyBoardAvoidingWrapper from '../../components/KeyBoardAvoidingWrapper';

const ProvideEmailAdress = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const emailInputRef = useRef(null);
  const [boxHeight, setBoxHeight] = useState('flex-1');
  const onPressContinue = () => {
    if (email === '') {
      emailInputRef.current.focus();
    } else {
      dispatch(setUserEmail(email));
      navigator.navigate('CheckEmail');
    }
  };
  return (
    <KeyBoardAvoidingWrapper>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <TouchableOpacity
          className="mt-[30px] ml-[23px] w-10"
          onPress={() => navigator.navigate('QualitiesNeeded')}>
          <AntDesign
            color="white"
            name="arrowleft"
            style={{fontSize: 24}}
          />
        </TouchableOpacity>
        <View className={`px-[32px] relative items-center`}>
          <Text className="text-2xl text-[#FFE600] mt-[30px] w-full font-[500]">
            Email address
          </Text>
          <Text className="text-[#AEAEAE] w-full font-extralight mt-[8px]">
            Please provide an email address you want to use with FreeBank.
          </Text>
          <TextInput
            ref={emailInputRef}
            onChangeText={text => setEmail(text)}
            className="h-[52px] w-full rounded-[16px]  p-4 bg-white text-black mt-[28px] text-base"
          />
        </View>
        <View className="mt-[88px] px-[23px] mb-[25px] items-center w-full">
          <View className="flex flex-row space-x-1.5">
            <Text className="text-white text-[13px]">Read our</Text>
            <TouchableOpacity className="">
              <Text className="text-[#FF9900]">Privacy policy</Text>
            </TouchableOpacity>

            <Text className="text-[13px] text-white">for</Text>
          </View>
          <Text className="text-center text-[13px] text-white">
            how we use your data
          </Text>
          <TouchableOpacity
            className=" bg-[#FFE600] mt-2  h-[52px] rounded-[26px] w-full justify-center items-center"
            onPress={() => onPressContinue()}>
            <Text className="text-black text-[18px]">Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyBoardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({});

export default ProvideEmailAdress;
