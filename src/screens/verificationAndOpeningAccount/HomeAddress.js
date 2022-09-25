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
import AntDesign from 'react-native-vector-icons/AntDesign'
import tw from 'tailwind-react-native-classnames';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import KeyBoardAvoidingWrapper from '../../components/KeyBoardAvoidingWrapper';
import {setUserAddress} from '../../redux/slices/AuthenticationSlice';

const HomeAddress = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const [postCode, setPostCode] = useState('');
  const [countryOfResidence, setCountryOfResidence] = useState('');

  const postCodeRef = useRef(null);
  const countryOfResidenceRef = useRef(null);

  const onPressContinue = () => {
    if (postCode === '') {
      postCodeRef.current.focus();
    } else if (countryOfResidence === '') {
      countryOfResidenceRef.current.focus();
    } else {
      dispatch(
        setUserAddress({
          postCode,
          country: countryOfResidence,
        }),
      );
      navigator.navigate('ChooseAdressRoad');
    }
  };
  return (
    <KeyBoardAvoidingWrapper>
      <TouchableOpacity
        className={`mt-[30px] ml-[23px] w-10`}
        onPress={() => navigator.navigate('ProvideDOB')}>
      <AntDesign
          color="white"
          name="arrowleft"        style={{fontSize: 24}}
        />
      </TouchableOpacity>
      <View className="px-[32px] flex-1">
        <Text className="text-2xl text-[#FFE600] mt-[30px] font-[500]">
          Home address
        </Text>
        <Text className="text-[#AEAEAE] font-extralight mt-[8px]">
          Please provide us your home address
        </Text>

        <View className={`mt-[31px]`}>
          <Text className="text-[#AEAEAE] font-extralight text-[13px]">
            Post code
          </Text>
          <TextInput
            ref={postCodeRef}
            onChangeText={text => setPostCode(text)}
            className="h-[52px] w-full rounded-[16px]  p-4 bg-white text-black mt-[5px] text-base"
          />
        </View>

        <View className={`mt-[19px]`}>
          <Text className="text-[#AEAEAE] font-extralight text-[13px]">
            Country of residence
          </Text>
          <TextInput
            ref={countryOfResidenceRef}
            onChangeText={text => setCountryOfResidence(text)}
            className="h-[52px] w-full rounded-[16px]  p-4 bg-white text-black mt-[5px] text-base"
          />
        </View>
        <TouchableOpacity
          className=" bg-[#FFE600] mt-[51px] mb-[25px]  h-[52px] rounded-[26px] w-full"
          onPress={() => onPressContinue()}>
          <Text className="text-black text-[18px]" style={tw`mx-auto my-auto`}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </KeyBoardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({});

export default HomeAddress;
