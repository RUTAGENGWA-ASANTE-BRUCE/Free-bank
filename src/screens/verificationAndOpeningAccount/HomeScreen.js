import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import KeyBoardAvoidingWrapper from '../../components/KeyBoardAvoidingWrapper';
const HomeScreen = () => {
  const navigator = useNavigation();

  return (
    <View className="h-full w-full bg-black ">
      <Image
        source={require('../../assets/bgImageHomeScreen.png')}
        style={{height: '100%', width: '100%', resizeMode: 'cover'}}
      />
      <View className="flex-1 bg-black">
        <LinearGradient
          locations={[0, 0.55]}
          colors={['transparent', 'black']}
          className="h-[301px]  w-full absolute bottom-0  px-[20px]">
          <Text className="text-white text-3xl font-[500]">
            <Text className="text-[#FFE600]"> Ethical {'\n'} banking</Text> for
            the {'\n'} next generation
          </Text>
          <TouchableOpacity
            onPress={() => navigator.navigate('LoginWithPassCode')}
            className=" border-[2px] border-[#FFE600] h-[52px] w-full rounded-[26px] mt-[38px] justify-center items-center">
            <Text className="text-[#FFE600] text-[18px] ">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" bg-[#FFE600] h-[52px] rounded-[26px] mt-[20px] justify-center items-center w-full"
            onPress={() => navigator.navigate('QualitiesNeeded')}>
            <Text className="text-black text-[18px]">Open a new account</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
