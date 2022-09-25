import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  setSelectedCrypto,
  selectServiceMode,
} from '../redux/slices/BuyingCryptoSlice';

const CryptoCurrencyItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage7d,
  logoUrl,
  sparkline,
  crypto,
  i,
}) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';
  const serviceMode = useSelector(selectServiceMode);
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const onPressContinue = () => {
    dispatch(setSelectedCrypto(crypto));
    navigator.navigate(
      serviceMode === 'buy' ? 'ProvideAmount' : 'ReceiveCrypto',
    );
  };
  return (
    <View className={`my-1  bg-[#0F0F0F] m-0.5 p-2 rounded-lg`}>
      <View style={styles.itemWrapper}>
        {/* Left side */}
        <View style={styles.leftWrapper}>
          <Image source={{uri: logoUrl}} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <View className={'flex flex-row'}>
              <Text
                className={
                  'border bg-[#666666]  h-5 mt-1  text-sm text-white rounded-md px-1.5 mr-1'
                }>
                {i}
              </Text>
              <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
            </View>
          </View>
        </View>

        {/* Small meadal graph */}
        <LineChart
          withHorizontalLabels={false}
          withVerticalLabels={false}
          withDots={false}
          fromZero={false}
          transparent={true}
          withInnerLines={false}
          withOuterLines={false}
          data={{
            labels: sparkline.map(point => point.x),
            datasets: [
              {
                data: sparkline.map(point => point.y),
              },
            ],
          }}
          width={70}
          height={50}
          chartConfig={{
            color: () => priceChangeColor,
          }}
          bezier
          style={tw`pr-0`}
        />

        {/* Right side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>
            ${currentPrice.toLocaleString('en-US', {currency: 'USD'})}
          </Text>
          <Text style={[styles.subtitle, {color: priceChangeColor}]}>
            {priceChangePercentage7d.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    // width:95,
    color: 'white',
    fontSize: 12,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#A9ABB1',
  },
  rightWrapper: {
    alignItems: 'flex-end',
  },
});

export default CryptoCurrencyItem;
