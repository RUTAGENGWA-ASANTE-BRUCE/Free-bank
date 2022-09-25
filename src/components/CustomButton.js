import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useRef} from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
export default function CustomButton(props) {
  const sheetRef = useRef(null);
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}>
      <Text>Swipe down to close</Text>
    </View>
  );

  return (
    <TouchableOpacity
      style={{
        height: 45,
        width: 45,
        borderRadius: 100,
        backgroundColor: '#FFE600',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
  
      <AntDesign size={26} color="black" name="swap" />


    </TouchableOpacity>
  );
}
