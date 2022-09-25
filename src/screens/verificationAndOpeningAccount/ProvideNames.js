import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import KeyBoardAvoidingWrapper from '../../components/KeyBoardAvoidingWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {setUserFullName} from '../../redux/slices/AuthenticationSlice';
const ProvideNames = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const onPressContinue = () => {
    if (firstName === '') {
      firstNameRef.current.focus();
    } else if (lastName === '') {
      lastNameRef.current.focus();
    } else {
      dispatch(
        setUserFullName({
          firstName,
          lastName,
        }),
      );
      navigator.navigate('ProvideDOB');
    }
  };
  return (
    <KeyBoardAvoidingWrapper>
      <TouchableOpacity
        className={`mt-[30px] ml-[23px] w-10`}
        onPress={() => navigator.navigate('CreatePassword')}>
      <AntDesign
          color="white"
          name="arrowleft"        style={{fontSize: 24}}
        />
      </TouchableOpacity>
      <View className="px-[32px] flex-1 items-center">
        <Text className=" w-full text-2xl text-[#FFE600] mt-[30px] font-[500]">
          Full legal name
        </Text>
        <Text className="w-full text-[#AEAEAE] font-extralight mt-[8px]">
          Please enter your full legal name as shown on your ID
        </Text>

        <View className={`mt-[29px] w-full`}>
          <Text className="text-[#AEAEAE] text-left font-extralight text-[13px] ">
            First name
          </Text>
          <TextInput
            ref={firstNameRef}
            onChangeText={text => setFirstName(text)}
            className="h-[52px] w-full rounded-[16px]  p-4 bg-white text-black mt-[5px] text-base"
          />
        </View>

        <View className={`mt-[19px] w-full`}>
          <Text className="text-[#AEAEAE] text-left font-extralight text-[13px]">
            Last name
          </Text>
          <TextInput
            ref={lastNameRef}
            onChangeText={text => setLastName(text)}
            className="h-[52px] w-full rounded-[16px]  p-4 bg-white text-black mt-[5px] text-base"
          />
        </View>
        <TouchableOpacity
          className=" bg-[#FFE600] mt-[29px] mb-[25px] h-[52px] rounded-[26px] w-full justify-center items-center"
          onPress={() => onPressContinue()}>
          <Text className="text-black text-[18px]">Continue</Text>
        </TouchableOpacity>
      </View>
    </KeyBoardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({});

export default ProvideNames;
