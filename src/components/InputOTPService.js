import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomNumberPad from './CustomNumberPad';

const InputOTPService = ({onPressContinue, passCode, setPassCode}) => {
  const lengthInput = 4;
  if (passCode.length === lengthInput) {
    onPressContinue();
    return;
  }
  return (
    <View className="mt-[20%] items-center">
      <View className={`w-4/6 flex flex-row justify-between mx-auto`}>
        {Array(lengthInput)
          .fill()
          .map((data, i) => (
            <View
              className="bg-[#2C2C2C] h-[24px] w-[24px] rounded-full justify-center items-center"
              key={i}>
              <Text
                className={` text-[12px]  w-2 text-white  ${
                  i === passCode.length - 1 ? 'border-b border-yellow-700' : ''
                }`}>
                {passCode && passCode.length > 0 ? passCode[i] : ''}
              </Text>
            </View>
          ))}
      </View>
      <View className="mt-[30%]">
        <CustomNumberPad value={passCode} maxLength={lengthInput} setValue={setPassCode} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default InputOTPService;
