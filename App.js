/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { MetaMask } from "@openocean.finance/wallet";
import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {TailwindProvider} from 'tailwindcss-react-native';
import Feather from 'react-native-vector-icons/Feather';
import {createStackNavigator} from '@react-navigation/stack';
import QualitiesNeeded from './src/screens/verificationAndOpeningAccount/QualitiesNeeded';
import ProvideEmailAdress from './src/screens/verificationAndOpeningAccount/ProvideEmailAdress';
import CheckEmail from './src/screens/verificationAndOpeningAccount/CheckEmail';
import ProvideMobileNumber from './src/screens/verificationAndOpeningAccount/ProvideMobileNumber';
import VerifyMobileNumber from './src/screens/verificationAndOpeningAccount/VerifyMobileNumber';
import CreatePassword from './src/screens/verificationAndOpeningAccount/CreatePassword';
import ProvideNames from './src/screens/verificationAndOpeningAccount/ProvideNames';
import BalanceHomeScreen from './src/screens/buyingCryptoWithCard/BalanceHomeScreen';
import Explore from './src/screens/explore/Explore';
import ProvideDOB from './src/screens/verificationAndOpeningAccount/ProvideDOB';
import HomeAddress from './src/screens/verificationAndOpeningAccount/HomeAddress';
import ChooseAdressRoad from './src/screens/verificationAndOpeningAccount/ChooseAdressRoad';
import ConfirmAddress from './src/screens/verificationAndOpeningAccount/ConfirmAddress';
import TermsAndConditions from './src/screens/verificationAndOpeningAccount/TermsAndConditions';
import HomeScreen from './src/screens/verificationAndOpeningAccount/HomeScreen';
import VerifyIdentity from './src/screens/verificationAndOpeningAccount/VerifyIdentity';
import SignUpSucess from './src/screens/verificationAndOpeningAccount/SignUpSucess';
import LoginWithPassCode from './src/screens/verificationAndOpeningAccount/LoginWithPassCode';
import ChooseCrypto from './src/screens/buyingCryptoWithCard/chooseCrypto';
import ProvideAmount from './src/screens/buyingCryptoWithCard/ProvideAmount';
import PaymentDetails from './src/screens/buyingCryptoWithCard/PaymentDetails';
import ReviewPurchase from './src/screens/buyingCryptoWithCard/ReviewPurchase';
import SuccessfullyPurchased from './src/screens/buyingCryptoWithCard/SuccessfullyPurchased';
import ReceiveCrypto from './src/screens/receivingCrypto/ReceiveCrypto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CustomButton from './src/components/CustomButton';
import LogoTabIcon from './src/components/FreeBankIconTab';
import SwapCrypto from './src/screens/SwapCurrency/SwapCrypto';
import ChooseSwapCrypto from './src/screens/SwapCurrency/ChooseSwapCrypto';
import SwapReview from './src/screens/SwapCurrency/SwapReview';
import SplashScreen from 'react-native-splash-screen';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <TailwindProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="QualitiesNeeded"
                component={QualitiesNeeded}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProvideEmailAdress"
                component={ProvideEmailAdress}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="CheckEmail"
                component={CheckEmail}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProvideMobileNumber"
                component={ProvideMobileNumber}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="VerifyMobileNumber"
                component={VerifyMobileNumber}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="CreatePassword"
                component={CreatePassword}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProvideNames"
                component={ProvideNames}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProvideDOB"
                component={ProvideDOB}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="HomeAddress"
                component={HomeAddress}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ChooseAdressRoad"
                component={ChooseAdressRoad}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ConfirmAddress"
                component={ConfirmAddress}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="TermsAndConditions"
                component={TermsAndConditions}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="VerifyIdentity"
                component={VerifyIdentity}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignUpSucess"
                component={SignUpSucess}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="LoginWithPassCode"
                component={LoginWithPassCode}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="ChooseCrypto"
                component={ChooseCrypto}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProvideAmount"
                component={ProvideAmount}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="PaymentDetails"
                component={PaymentDetails}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ReviewPurchase"
                component={ReviewPurchase}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SuccessfullyPurchased"
                component={SuccessfullyPurchased}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ReceiveCrypto"
                component={ReceiveCrypto}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SwapCrypto"
                component={SwapCrypto}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SwapReview"
                component={SwapReview}
                options={{headerShown: false}}
              />

              <Stack.Screen name="Portfolio" options={{headerShown: false}}>
                {() => (
                  <Tab.Navigator
                    initialRouteName="Feed"
                    activeColor="#FFE600"
                    barStyle={{
                      backgroundColor: 'black',
                      height: 55,
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      display: 'flex',
                    }}>
                    <Tab.Screen
                      name="Assets"
                      component={BalanceHomeScreen}
                      options={{
                        tabBarLabel: 'Assets',
                        tabBarIcon: props => <LogoTabIcon {...props} />,
                      }}
                    />
                    <Tab.Screen
                      name="ChooseSwapCrypto"
                      component={ChooseSwapCrypto}
                      options={{
                        tabBarLabel: '',
                        tabBarIcon: props => <CustomButton {...props} />,
                      }}
                    />
                    <Tab.Screen
                      name="Explore"
                      component={Explore}
                      options={{
                        tabBarLabel: 'Explore',
                        tabBarIcon: ({color}) => (
                          <Feather name="trending-up" color={color} size={26} />
                        ),
                      }}
                    />
                  </Tab.Navigator>
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
};

export default App;
