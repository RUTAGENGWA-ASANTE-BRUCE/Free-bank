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
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {getMarketData} from '../../services/cryptoService';
import ExploreCryptoCurrencyItem from '../../components/ExploreCryptoCurrencyItem';
import CryptoSkeletonComponent from '../../components/CryptoSkeletonComponent';

const Explore = () => {
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

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        
      }}>
      <View
        className={`w-full justify-between mt-[30px] px-[22px] flex flex-row`}>
        <TouchableOpacity className={``}>
          <Feather color="#808080" name="settings" style={{fontSize: 24}} />
        </TouchableOpacity>
        <TouchableOpacity className={``}>
          <MaterialCommunityIcon
            color="#808080"
            name="message-text-outline"
            style={{fontSize: 24}}
          />
        </TouchableOpacity>
      </View>
      <Text className={`text-[18px] text-yellow-400 font-[500]   mt-5 ml-2`}>
        Explore over 12,000 crypto's{'\n'}available Freebank...
      </Text>
      <Pressable
        className={`flex h-12 flex-row mt-5 bg-[#2C2C2C] rounded-xl w-[95%] `}
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
        <View className={`my-5 w-[95%]`}>
          {searchValue
            ? cryptoMarketData
                .filter(currency =>
                  currency.name
                    .toLocaleLowerCase()
                    .toString()
                    .includes(searchValue.toLowerCase()),
                )
                .map((item, i) => (
                  <ExploreCryptoCurrencyItem
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
                <ExploreCryptoCurrencyItem
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
        <CryptoSkeletonComponent />

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

export default Explore;
