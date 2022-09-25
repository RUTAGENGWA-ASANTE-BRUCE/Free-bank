import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import KeyBoardAvoidingWrapper from '../../components/KeyBoardAvoidingWrapper';
import {useDispatch} from 'react-redux';
import {setUserDOB} from '../../redux/slices/AuthenticationSlice';

const ProvideDOB = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const dayInputRef = useRef(null);
  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);

  const onPressContinue = () => {
    if (day === '') {
      dayInputRef.current.focus();
    } else if (month === '') {
      monthInputRef.current.focus();
    } else if (year === '') {
      yearInputRef.current.focus();
    } else {
      dispatch(
        setUserDOB({
          day,
          month,
          year,
        }),
      );
      navigator.navigate('HomeAddress');
    }
  };

  return (
    <KeyBoardAvoidingWrapper>
      <TouchableOpacity
        className={`mt-[30px] ml-[23px] w-10`}
        onPress={() => navigator.navigate('ProvideNames')}>
      <AntDesign
          color="white"
          name="arrowleft"        style={{fontSize: 24}}
        />
      </TouchableOpacity>
      <View className="px-[32px] flex-1">
        <Text className="text-2xl text-[#FFE600] mt-[30px] font-[500]">
          Date of birth
        </Text>
        <Text className="text-[#AEAEAE] font-extralight mt-[8px]">
          You must be 18 or older
        </Text>
        <View className={`mt-[53px]`}>
          <Text className="text-[#AEAEAE] font-extralight text-[13px]">
            Date
          </Text>
          <View className={`flex flex-row mt-[5px] w-full`}>
            <TextInput
              className="h-[52px] w-[56px] rounded-[16px]  p-4 bg-white text-black  text-base"
              placeholder="dd"
              keyboardType="number-pad"
              maxLength={2}
              ref={dayInputRef}
              onChangeText={text => setDay(text)}
            />
            <TextInput
              className="h-[52px] w-[56px] ml-3 rounded-[16px]  p-4 bg-white text-black  text-base"
              placeholder="mm"
              keyboardType="number-pad"
              maxLength={2}
              ref={monthInputRef}
              onChangeText={text => setMonth(text)}
            />
            <TextInput
              className="h-[52px] ml-3 w-[65px] rounded-[16px]  p-4 bg-white text-black  text-base"
              placeholder="yy"
              keyboardType="number-pad"
              maxLength={4}
              ref={yearInputRef}
              onChangeText={text => setYear(text)}
            />
          </View>
        </View>
        <TouchableOpacity
          className=" bg-[#FFE600] mt-[125px] mb-[25px] h-[52px] rounded-[26px] w-full justify-center items-center"
          onPress={() => onPressContinue()}>
          <Text className="text-black text-[18px]">Continue</Text>
        </TouchableOpacity>
      </View>
    </KeyBoardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({});

export default ProvideDOB;
