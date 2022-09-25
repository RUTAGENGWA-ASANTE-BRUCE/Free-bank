import React from 'react';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAvoidingView,TouchableWithoutFeedback ,Platform,Keyboard} from 'react-native';
const KeyBoardAvoidingWrapper = props => {
  return (
    <KeyboardAwareScrollView
      // contentContainerStyle={{
      //   // height: '100%',
      //   // width: '100%',
      //   backgroundColor: 'black',
      //   // display: 'flex',
      //   flex:1
      //   // flexDirection: 'column',
      // }}
      className="bg-black"
      extraHeight={265}
      enableOnAndroid={true}
      >

      {props.children}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({});

export default KeyBoardAvoidingWrapper;
