import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'

const VerifyIdentity = () => {
  const navigator = useNavigation();
  return (
    <ScrollView  contentContainerStyle={{
      backgroundColor: 'black',
      padding: 4,
      flex: 1,
    }}>
      <TouchableOpacity
        className={`mt-[30px] ml-[23px]`}
        onPress={() => navigator.navigate('TermsAndConditions')}>
      <AntDesign
          color="white"
          name="arrowleft"        style={{fontSize: 24}}
        />
      </TouchableOpacity>
      <View className="px-[32px] flex-1 items-center">
        <Image
          source={require('../../assets/idIcon.png')}
          className={`mt-[17%] h-28 w-40 `}
        />
        <Text className="text-[#FFE600] text-2xl text-center mx-auto  mt-[15%] font-[500]">
          Finally, let's verify{'\n'}your identity
        </Text>
        <Text className="text-[#AEAEAE] mt-[7%] text-center">You'll need:</Text>
        <Text className="text-[#AEAEAE] mt-5 text-center">
          1.Your passport, drivers license, residency permit or national
          identity card
        </Text>
        <Text className="text-[#AEAEAE] mt-5 text-center">
          2.To record a 3 second selfie video. Don't worry it's both private and
          easy!
        </Text>
        <TouchableOpacity
          className=" bg-[#FFE600]  h-[52px] rounded-[26px] w-full mt-[98px] absolute bottom-[3%] justify-center items-center"
          onPress={() => navigator.navigate('SignUpSucess')}>
          <Text className="text-black text-[18px]">Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default VerifyIdentity;
