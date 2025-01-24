import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
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
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ViewProps} from 'react-native';

interface CustomViewProps extends ViewProps {
  userName: string;
  setUsername: (txt: string) => void;
  loading?: boolean;
  onSubmit: (txt: any) => void;
  mode: string;
}

const LoginWithVerification: React.FC<CustomViewProps> = ({
  onSubmit,
  mode,
  userName,
  setUsername,
  loading = false,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  async function confirmCode(otp: string) {
    try {
      await confirm.confirm(otp);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  const handleLogin = async () => {
    try {
      console.log('credentials', userName);
      const confirmation = onSubmit(userName);
      setConfirm(confirmation);
      navigation.navigate(Routes.OtpVerification, {
        credentials: userName,
        mode: mode,
        verifyCredentials: confirmCode,
      });
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <ImageBackground
          source={IMAGES.usernameSocial}
          style={styles.container}>
          <ImageBackground
            imageStyle={styles.backgroundContainer}
            source={
              mode === 'Email ID'
                ? IMAGES.loginVerification
                : IMAGES.phoneVerification
            }
            style={styles.backgroundContainer}>
            <CustomText style={styles.loginText}> LOGIN </CustomText>
            <CustomText style={styles.descriptionText}>
              Please enter {mode} registered with your account
            </CustomText>
            <View style={styles.textboxView}>
              <CustomText style={styles.labelText}>
                {mode === 'Email ID' ? 'Email ID' : 'Mobile Number'}
              </CustomText>
              <CustomTextInput
                keyboardType={
                  mode === 'Email ID' ? 'email-address' : 'phone-pad'
                }
                placeholder={`Enter your ${mode} here`}
                value={userName}
                onChangeText={text => setUsername(text)}
                style={styles.textInput}
                iconName={mode === 'Email ID' ? 'email-outline' : 'phone'}
                iconColor={colors.gray}
                placeholderTextColor={colors.gray}
              />
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                onPress={handleLogin}
                loading={loading}
                style={[
                  styles.loginButton,
                  {
                    backgroundColor:
                      mode === 'Email ID'
                        ? colors.emailVerificatioonButton
                        : colors.phoneVerificationButton,
                  },
                ]}
                title="LOGIN"
              />
              <CustomText style={styles.registerText}>
                Didn’t have an Account?{' '}
                <CustomText onPress={() => {}} style={styles.boldText}>
                  Register Now
                </CustomText>
              </CustomText>
            </View>
          </ImageBackground>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginWithVerification;

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
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  textboxView: {
    width: WP(90),
    height: HP(8),
    backgroundColor: colors.white,
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: WP(3),
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: FontSize.h3_5,
    color: colors.white,
  },
  descriptionText: {
    color: colors.white,
    fontSize: FontSize.h1_9,
    textAlign: 'center',
    width: WP(80),
  },
  labelText: {
    marginTop: HP(5.5),
    color: '#6A6A6D',
    marginLeft: WP(2),
  },
  textInput: {
    borderBottomColor: colors.white,
    height: HP(5),
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: HP(23),
  },
  loginButton: {
    height: HP(6),
    width: WP(90),
  },
  registerText: {
    marginVertical: HP(5),
  },
  boldText: {
    fontWeight: 'bold',
  },
});
