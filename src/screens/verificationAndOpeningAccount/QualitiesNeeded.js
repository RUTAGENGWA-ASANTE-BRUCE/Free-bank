import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const qualitiesNeeded = [
  {
    id: 'hdqiudhqdq',
    quality: 'Be 18 or older',
    icon: (
      <Feather color="white" name="user" style={{fontSize: 19, marginTop: 5}} />
    ),
  },
  {
    id: 'kjcbq87tgdubqdq',
    quality: 'Live in Turkey',
    icon: (
      <Entypo color="white" name="globe" style={{fontSize: 19, marginTop: 5}} />
    ),
  },
  {
    id: 'noqfcq7ud8q7hdhqdq',
    quality: 'Have a Turkish bank account',
    icon: (
      <View className="w-5 h-5  border rounded-3xl border-white justify-center items-center">
        <Text className="text-white text-[10px] font-bold">TR</Text>
      </View>
    ),
  },
  {
    id: 'qhf8ihf2if2f',
    quality: 'Have a valid form of ID',
    icon: (
      <AntDesign
        color="white"
        name="idcard"
        style={{fontSize: 19, marginTop: 5}}
      />
    ),
  },
];

const QualitiesNeeded = () => {
  const navigator = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={{
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
      }}>
      <TouchableOpacity
        className="mt-[30px] ml-[23px] w-10 "
        onPress={() => navigator.navigate('HomeScreen')}>
      <AntDesign
          color="white"
          name="arrowleft"        style={{fontSize: 24}}
        />
      </TouchableOpacity>
      <View className="px-[32px] mt-[36px] flex-1 items-center">
        <Text className="text-white text-2xl font-[500] w-full">
          To open a <Text className="text-[#FFE600]">bank</Text> {'\n'}account
          you need to ...
        </Text>
        <View className="flex flex-col ml-[6px] space-y-[34px] mt-[36px] w-full">
          {qualitiesNeeded.map(({icon, id, quality}) => (
            <View className="flex flex-row" key={id}>
              {icon}
              <Text className="ml-4 text-white mt-1.5">{quality}</Text>
            </View>
          ))}
        </View>
      </View>
      <View className="px-[22px] bottom-[25px] absolute w-[100%]">
        <TouchableOpacity
          className=" bg-[#FFE600] mx-auto  h-[52px] rounded-[26px] w-full items-center justify-center"
          onPress={() => navigator.navigate('ProvideEmailAdress')}>
          <Text className="text-black text-[18px]">Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default QualitiesNeeded;
