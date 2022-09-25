import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
const CheckEmail = () => {
  const navigator = useNavigation();

  return (
    <ScrollView contentContainerStyle={{
      backgroundColor: 'black',
      padding: 4,
      flex: 1,
    }}>
      <TouchableOpacity
        className="mt-[30px] ml-[23px]"
        onPress={() => navigator.navigate('ProvideEmailAdress')}>
      <AntDesign
          color="white"
          name="arrowleft"        style={{fontSize: 24}}
        />
      </TouchableOpacity>
      <View className="px-[32px] flex-1 items-center">
        <Image
          source={require('../../assets/messageBox.png')}
          className="mt-[25%] h-[101.82px] w-[106.74px]"
        />
        <Text className="text-2xl mt-[12%] text-white font-[500]">
          Check your email
        </Text>
        <Text className="text-white mt-[17px]">We've sent an email to</Text>
        <Text className="text-white mt-0.5 underline">pinto@bank.io</Text>
        <TouchableOpacity>
          <Text className="text-[#FF9900] text-center mt-[30%]">
            Need help ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-[#FF9900] text-center mt-[8%]">
            I didn't receive an email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className=" bg-[#FFE600] absolute bottom-[3%] h-[52px] rounded-[26px] w-full justify-center items-center mt-[40px]"
          onPress={() => navigator.navigate('ProvideMobileNumber')}>
          <Text className="text-black text-[18px] ">Open email</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default CheckEmail;
