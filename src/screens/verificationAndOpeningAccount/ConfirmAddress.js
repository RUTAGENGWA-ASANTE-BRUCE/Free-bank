import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import KeyBoardAvoidingWrapper from '../../components/KeyBoardAvoidingWrapper';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useSelector} from 'react-redux';
import {selectUserAddress} from '../../redux/slices/AuthenticationSlice';

const ConfirmAddress = () => {
  const navigator = useNavigation();
  const userAddress = useSelector(selectUserAddress);
  return (
    <KeyBoardAvoidingWrapper>
      <TouchableOpacity
        className={`w-10 mt-[30px] ml-[23px]`}
        onPress={() => navigator.navigate('ChooseAdressRoad')}>
      <AntDesign
          color="white"
          name="arrowleft"        style={tw`text-white text-2xl`}
        />
      </TouchableOpacity>
      <View className="px-[32px] flex-1">
        <Text className="text-2xl text-[#FFE600] mt-[30px] font-[500]">
          Home address
        </Text>
        <Text className="text-[#AEAEAE] font-extralight mt-[5px]">
          Please confirm your details
        </Text>

        <View className={`mt-[31px]`}>
          <Text className="text-[#AEAEAE] font-extralight text-[13px]">
            Address line 1
          </Text>
          <TextInput
            value={userAddress.roadAddress}
            editable={false}
            className="h-[52px] w-full rounded-[16px]  p-4 bg-white text-black mt-[5px] text-base"
          />
        </View>

        <View className='mt-[19px]'>
          <Text className="text-[#AEAEAE] font-extralight text-[13px]">
            Address line 2 (optional)
          </Text>
          <TextInput
            value={userAddress.country}
            editable={false}
            className="h-[52px] w-full rounded-[16px]  p-4 bg-white text-black mt-[5px] text-base"
          />
        </View>

        <View className='mt-[19px]'>
          <Text className="text-[#AEAEAE] font-extralight text-[13px]">
            City
          </Text>
          <TextInput
            value={userAddress.country}
            editable={false}
            className="h-[52px] w-full rounded-[16px]  p-4 bg-white text-black mt-[5px] text-base"
          />
        </View>

        <View className='mt-[19px]'>
          <Text className="text-[#AEAEAE] font-extralight text-[13px]">
            Postcode
          </Text>
          <TextInput
            value={userAddress.postCode}
            editable={false}
            className="h-[52px] w-full rounded-[16px]  p-4 bg-white text-black mt-[5px] text-base"
          />
        </View>

        <View className='mt-[19px]'>
          <Text className="text-[#AEAEAE] font-extralight text-[13px]">
            Country
          </Text>
          <TextInput
            value={userAddress.country}
            editable={false}
            className="h-[52px] w-full rounded-[16px]  p-4 bg-white text-black mt-[5px] text-base"
          />
        </View>
        <TouchableOpacity
          className=" bg-[#FFE600]  h-[52px] rounded-[26px] w-full mt-[32px] mb-[25px]"
          onPress={() => navigator.navigate('TermsAndConditions')}>
          <Text className="text-black text-[18px]" style={tw`mx-auto my-auto`}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </KeyBoardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({});

export default ConfirmAddress;
