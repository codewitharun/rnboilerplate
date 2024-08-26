import React from 'react';
import {Button, Text, View, SafeAreaView} from 'react-native';
import CustomButton from '../../../components/CustomButton/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {updateToken} from '../../../redux/auth';

interface AppProps {
  navigation: any;
}

const Home: React.FC<AppProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const handleBack = async () => {
    await AsyncStorage.removeItem('token');

    dispatch(updateToken(null));
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome to the main page</Text>
        <CustomButton title="Go back" onPress={() => handleBack()} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
