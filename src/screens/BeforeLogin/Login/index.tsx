import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../../components/CustomButton/Button';
import {HP, WP} from '../../../utils/constants';
import CustomTextInput from '../../../components/CustomTextInput/TextInput';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginUser} from '../../../redux/auth';
import {AppDispatch} from '../../../store/store';

import LoginAuth from '../../../components/Login';
const Login: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector(state => state.user.token);
  const [loader, setLoader] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleLogin = () => {
    setLoader(true);
    dispatch(loginUser({email: 'email@yopmail.com', password: 'pasword'}));
  };
  return (
    <SafeAreaView>
      <LoginAuth />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HP(100),
    width: WP(100),
  },
});
export default Login;
