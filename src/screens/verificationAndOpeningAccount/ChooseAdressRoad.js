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
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {setUserAddress} from '../../redux/slices/AuthenticationSlice';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useSelector} from 'react-redux';
import {selectUserAddress} from '../../redux/slices/AuthenticationSlice';

const roads = [1, 2, 3, 4, 5, 5, 7, 8];

const ChooseAdressRoad = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const userAddress = useSelector(selectUserAddress);
  const onPressContinue = roadAddress => {
    dispatch(
      setUserAddress({
        ...userAddress,
        roadAddress,
      }),
    );
    navigator.navigate('ConfirmAddress');
  };
  return (
    <ScrollView className={`h-full w-full bg-black`}>
    
      <TouchableOpacity
        className={`mt-[30px] ml-[23px] w-10`}
        onPress={() => navigator.navigate('HomeAddress')}>
      <AntDesign
          color="white"
          name="arrowleft"        style={{fontSize: 24, marginLeft: 4}}
        />
      </TouchableOpacity>
      <View className="px-[32px] flex-1">
        <Text className="text-2xl text-[#FFE600] mt-[30px] font-[500]">
          Choose your address
        </Text>
        <TouchableOpacity className={`flex flex-row mt-[23px]`}>
          <Text className="text-[#FF9900]">
            <Entypo name="plus" classname="text-[#FF9900]" />
            Add Manually
          </Text>
        </TouchableOpacity>
      </View>

      <View className={`mt-[53px] w-full `}>
        {roads.map((road, i) => (
          <TouchableOpacity
            onPress={() => onPressContinue(`${road} London Road`)}
            key={i}
            className={` w-full flex-row  ${
              road == road[roads.length - 1] ? '' : 'border-b'
            } border-[#2C2C2C]  items-center justify-between px-5 pb-[23px] pt-[22px]`}>
            <Text className="text-[#AEAEAE]">{road} London Road</Text>
            <Entypo
              color="#2C2C2C"
              name="chevron-small-right"
              className="text-[12px]"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ChooseAdressRoad;
