import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import tw from 'tailwind-react-native-classnames';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const buttons = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '.',
  '0',
  <AntDesign
    color="white"
    name="arrowleft"
    style={tw`text-white text-3xl`}
  />,
];

const CustomNumberPad = ({setValue,maxLength,value}) => {
  return (
    <View className="w-full flex flex-row justify-between flex-wrap mt-1">
      {buttons.map((button, i) => (
        <TouchableOpacity
          key={`${i} ${button}`}
          className="w-2/6 h-[55px] pt-4"
          onPress={async () => {
            console.log('value.legth===',value.length,'====maxLength====',maxLength)
            if(value.length<=maxLength &&             i !== buttons.length - 1){
              
              setValue(prev => `${prev}${button}`)
            } 
              if(i===buttons.length-1){

              setValue(prev => prev.substring(1, prev.length));
              }

   
          }}>
          <Text style={tw`text-white`} className="text-center text-xl">
            {button}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomNumberPad;
