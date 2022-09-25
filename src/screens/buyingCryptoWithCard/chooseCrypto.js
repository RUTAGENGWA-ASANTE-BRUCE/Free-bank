import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {getMarketData} from '../../services/cryptoService';
import CryptoCurrencyItem from '../../components/CryptoCurrencyItem';
import {useSelector} from 'react-redux';
import CryptoSkeletonComponent from '../../components/CryptoSkeletonComponent';
import {selectServiceMode} from '../../redux/slices/BuyingCryptoSlice';
const ChooseCrypto = () => {
  const [cryptoMarketData, setCryptoMarketData] = useState([]);
  const navigator = useNavigation();

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setCryptoMarketData(marketData);
    };

    fetchMarketData();
  }, []);
  const searchInputRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const serviceMode = useSelector(selectServiceMode);

  return (
    <ScrollView className={`h-full w-full bg-black px-[12px] py-2`}>
      <TouchableOpacity
        className={`w-10 ml-[4px] mt-[40px]`}
        onPress={() => navigator.navigate('Portfolio')}>
        <AntDesign
          color="white"
          name="close"
          style={{fontSize: 25}}
          className=""
        />
      </TouchableOpacity>
      <Text className={`text-2xl text-yellow-400 font-[500]   mt-[35px] ml-[12px]`}>
        Choose a crypto
      </Text>
      <Text className={`text-2xl text-yellow-400 font-[500]  ml-[12px]`}>
        to {serviceMode}...
      </Text>
      <Pressable
        className={`flex h-12 flex-row mt-5 bg-[#2C2C2C] rounded-xl `}
        onPress={() => searchInputRef.current.focus()}>
        <Fontisto
          color="white"
          name="search"
          style={{fontSize: 20, marginLeft: 13, marginTop: 15}}
          className={` mt-2`}
        />
        <TextInput
          ref={searchInputRef}
          onChangeText={text => setSearchValue(text)}
          className={` text-white rounded-xl   text-xl bg-[#2C2C2C]  `}
        />
      </Pressable>
      {cryptoMarketData.length>0 ? (
        <View className={`my-5`}>
          {searchValue
            ? cryptoMarketData
                .filter(currency =>
                  currency.name
                    .toLocaleLowerCase()
                    .toString()
                    .includes(searchValue.toLowerCase()),
                )
                .map((item, i) => (
                  <CryptoCurrencyItem
                    name={item.name}
                    symbol={item.symbol}
                    currentPrice={item.current_price}
                    priceChangePercentage7d={
                      item.price_change_percentage_7d_in_currency
                    }
                    logoUrl={item.image}
                    sparkline={item.sparkline_in_7d.price}
                    crypto={item}
                    key={item.id}
                    i={i}
                  />
                ))
            : cryptoMarketData.map((item, i) => (
                <CryptoCurrencyItem
                  name={item.name}
                  symbol={item.symbol}
                  currentPrice={item.current_price}
                  priceChangePercentage7d={
                    item.price_change_percentage_7d_in_currency
                  }
                  logoUrl={item.image}
                  sparkline={item.sparkline_in_7d.price}
                  crypto={item}
                  key={item.id}
                  i={i}
                />
              ))}
        </View>
      ) : (
        <View className={`my-5 w-[95%] flex flex-col`}>

<CryptoSkeletonComponent />
<CryptoSkeletonComponent />
<CryptoSkeletonComponent />
<CryptoSkeletonComponent />
<CryptoSkeletonComponent />
<CryptoSkeletonComponent />
<CryptoSkeletonComponent />
<CryptoSkeletonComponent />
<CryptoSkeletonComponent />
<CryptoSkeletonComponent />
<CryptoSkeletonComponent />
</View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ChooseCrypto;
