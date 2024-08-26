import React, {useState, useRef} from 'react';
import {View, StyleSheet, ImageBackground, TextInput} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import colors from '../../../utils/colors';
import {HP, WP} from '../../../utils/constants';
import CustomText from '../../CustomText';
import IMAGES from '../../../utils/imagePath';
import CustomButton from '../../CustomButton/Button';
import {FontSize} from '../../../utils/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface RouteParams {
  credentials: string;
  mode: string;
  verifyCredentials: (code: string) => void;
}

interface AppProps {}

const OtpVerification: React.FC<AppProps> = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {credentials, mode, verifyCredentials} = route.params as RouteParams;
  const [AuthMode, setAuthMode] = useState<string>(mode);
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);

  const otpRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otpRefs.length - 1) {
        otpRefs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && index > 0 && otp[index] === '') {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = async () => {
    try {
      let sendOtp = otp.join('');
      verifyCredentials(sendOtp);
    } catch (error) {
      console.error('Error verifying credentials:', error);
    }
  };

  return (
    <ImageBackground source={IMAGES.usernameSocial} style={styles.container}>
      <ImageBackground
        source={
          mode === 'Email ID'
            ? IMAGES.loginVerification
            : IMAGES.phoneVerification
        }
        style={styles.backgroundContainer}>
        <View style={styles.headerContainer}>
          <Icon
            name="arrow-left"
            size={30}
            color={'white'}
            style={styles.backIcon}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <CustomText style={styles.loginText}> Verify Account! </CustomText>
        </View>
        <CustomText style={styles.descriptionText}>
          Enter 6-digit Code we have sent to {credentials}
        </CustomText>
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={otpRefs[index]}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={value}
              onChangeText={text => handleOtpChange(index, text)}
              onKeyPress={({nativeEvent: {key}}) => handleKeyPress(index, key)}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={handleSubmit}
            style={{
              height: HP(6),
              backgroundColor:
                mode === 'Email ID'
                  ? colors.emailVerificatioonButton
                  : colors.phoneVerificationButton,
              width: WP(90),
            }}
            title="NEXT"
          />
          <CustomText
            style={{
              marginVertical: HP(5),
              width: WP(80),
              textAlign: 'center',
              lineHeight: HP(3),
            }}>
            by clicking next, you agree to our{' '}
            <CustomText onPress={() => {}} style={styles.boldText}>
              Privacy Policy
            </CustomText>{' '}
            our{' '}
            <CustomText onPress={() => {}} style={styles.boldText}>
              Terms and Conditions
            </CustomText>
          </CustomText>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default OtpVerification;

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
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WP(90),
    justifyContent: 'space-between',
    paddingHorizontal: WP(5),
  },
  backIcon: {
    alignSelf: 'flex-start',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WP(80),
  },
  otpInput: {
    width: WP(12),
    height: HP(8),
    backgroundColor: colors.white,
    textAlign: 'center',
    fontSize: FontSize.h1_9,
    borderRadius: 10,
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: FontSize.h3_5,
    color: colors.white,
    marginRight: WP(10),
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
    height: HP(23),
  },
  boldText: {
    fontWeight: 'bold',
  },
});
