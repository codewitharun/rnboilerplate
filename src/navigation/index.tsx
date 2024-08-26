import {useEffect, useState} from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from './constants';
import Home from '../screens/AfterLogin/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../screens/BeforeLogin/Login';
import {useDispatch, useSelector} from 'react-redux';
import {updateToken} from '../redux/auth';
import OtpVerification from '../components/Login/LoginWithVerification/OtpVerification';

import {RootStackParamList} from './types';
const Stack = createNativeStackNavigator<RootStackParamList>();
const AfterLogin = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};
const BeforeLogin = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.OtpVerification} component={OtpVerification} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const dispatch = useDispatch<AppDispatch>();

  const token = useSelector(state => state.user.token);
  async function onAuthStateChanged(user: any) {
    if (user) {
      console.log('🚀 ~ onAuthStateChanged ~ user:', user);
      const multiFactorUser = await auth().multiFactor(user);
      console.log(
        '🚀 ~ onAuthStateChanged ~ multiFactorUser:',
        multiFactorUser,
      );
      const token = await AsyncStorage.setItem('token', user.uid);
      getToken();
    }
  }

  useEffect(() => {
    // unsubscribe on unmount
  }, []);
  useEffect(() => {
    getToken();
  }, []);
  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log('🚀 ~ getToken ~ token:', token);
    dispatch(updateToken(token));
    // setToken(token);s
  };
  return (
    <NavigationContainer>
      {token !== null ? <AfterLogin /> : <BeforeLogin />}
    </NavigationContainer>
  );
};
export default Navigation;
