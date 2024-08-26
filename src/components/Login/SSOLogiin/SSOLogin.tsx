import React, {useState} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/types';
import colors from '../../../utils/colors';
import {HP, WP} from '../../../utils/constants';
import CustomText from '../../CustomText';
import IMAGES from '../../../utils/imagePath';
import CustomTextInput from '../../CustomTextInput/TextInput';
import CustomButton from '../../CustomButton/Button';
import {FontSize} from '../../../utils/fonts';
import {Routes} from '../../../navigation/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MicrosoftSvg from '../../../assets/SVG/microsoftSVG';

interface AppProps {
  microsoftLogin: () => void;
  loading: boolean;
}

const SSOLogin: React.FC<AppProps> = ({microsoftLogin, loading = false}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [mode, setMode] = useState<string>('Email Address');
  const [credentials, setCredentials] = useState<string>('arun@yopmail.com');

  return (
    <ImageBackground source={IMAGES.usernameSocial} style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View>
          <CustomText style={styles.loginHeader}> Login </CustomText>
        </View>
        <View>
          <CustomButton
            loading={loading}
            onPress={microsoftLogin}
            style={styles.buttonContainer}>
            <MicrosoftSvg width={WP(12)} height={HP(3)} />
            <CustomText style={styles.loginText}>
              {' '}
              Sign in with Microsoft{' '}
            </CustomText>
          </CustomButton>
        </View>
        <View style={styles.termBox}>
          <CustomText onPress={() => {}} style={{marginVertical: HP(-5)}}>
            Term and Conditions
          </CustomText>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SSOLogin;

const styles = StyleSheet.create({
  container: {
    height: HP(100),
    width: WP(100),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.FACEBOOK,
    resizeMode: 'contain',
  },
  backgroundContainer: {
    height: HP(60),
    width: WP(100),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.ssoLogin,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },

  loginText: {
    // fontWeight: 'bold',
    fontSize: FontSize.h2,
    color: colors.black,
  },
  loginHeader: {
    fontSize: FontSize.h4_5,
    color: colors.white,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: colors.white,
    fontSize: FontSize.h1_9,
    textAlign: 'center',
    width: WP(80),
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    // paddingVertical: HP(1),
    height: HP(8),
    width: WP(80),
    borderRadius: 35,
    flexDirection: 'row',
  },
  boldText: {
    fontWeight: 'bold',
  },
  termBox: {justifyContent: 'flex-end'},
});
