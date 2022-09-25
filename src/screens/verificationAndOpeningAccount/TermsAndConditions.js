import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TermsAndConditions = () => {
  const navigator = useNavigation();
  return (
    <ScrollView className={`h-full w-full bg-black`}>
      <TouchableOpacity
        className={`mt-[30px] ml-[23px] w-10`}
        onPress={() => navigator.navigate('ConfirmAddress')}>
      <AntDesign
          color="white"
          name="arrowleft"        style={{fontSize: 24}}
        />
      </TouchableOpacity>
      <View className="px-[32px] flex-1">
        <Text className="text-2xl text-[#FFE600] mt-[30px] font-[500]">
          Terms & conditions
        </Text>
        <Text className="text-[#808080] text-[13px] mt-8">
          For your own benefit and protection, you should read these terms and
          conditions and all documents referred to very carefully before using
          our services, the Ziglu account and the Ziglu app. If you do not
          understand any point, please contact us and ask for further
          information using the details below.
        </Text>

        <Text className="text-[#808080] text-[13px] mt-8">
          PLEASE NOTE: The risk of loss in trading or holding Digital Currencies
          can be substantial. As with any asset, the value of digutal currencies
          and cryptocurrencies can go up or down (and can even drop to zerp),
          may be very volatile and there can be a substantial risk that you lose
          money buying, selling, holding, or investing in digital currencies and
          cryptocurrencies.
        </Text>
        <Text className="text-[#808080] text-[13px] mt-4">
          Digital currency and cryptocurrency services are not currently
          regulated by the Financial Conduct Authority or any other regular in
          the UK.
        </Text>
        <Text className="text-[#808080] text-[13px] mt-4">
          You should carefully consider whether trading or holding digital
          currencies or cryptocurrencies is suitable for you in light of your
          own financial situation and attitude to risk.
        </Text>
        <TouchableOpacity
          className=" bg-[#FFE600]  h-[52px] rounded-[26px] w-full mt-[25px] mb-[25px] justify-center items-center"
          onPress={() => navigator.navigate('VerifyIdentity')}>
          <Text className="text-black text-[18px]">I agree</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default TermsAndConditions;
