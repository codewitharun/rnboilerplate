import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {HP, WP} from '../../../utils/constants';

import Logo from '../../../assets/SVG/logo';
import CustomText from '../../CustomText';
import {fonts, FontSize} from '../../../utils/fonts';
import colors from '../../../utils/colors';
import CustomTextInput from '../../CustomTextInput/TextInput';
import CustomButton from '../../CustomButton/Button';
import GoogleSvg from '../../../assets/SVG/googleSvg';
import GithubSvg from '../../../assets/SVG/githubSvg';
interface customViewProps {
  onSubmit: () => void;
  forgotPassword: () => void;
  userName: string;
  setUsername: (txt: string) => void;
  loading?: boolean;
  password: string;
  setPassword: (txt: string) => void;
  googleLogin: () => void;
  githubLogin: () => void;
}
const LoginWithAuth: React.FC<customViewProps> = ({
  onSubmit,
  setPassword,
  setUsername,
  loading = false,
  userName,
  password,
  forgotPassword,
  googleLogin,
  githubLogin,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <CustomText style={styles.heading}>Log in to your account</CustomText>
      </View>
      <View style={styles.mainView}>
        <View>
          <CustomTextInput
            placeholder="Email"
            value={userName}
            onChangeText={setUsername}
            placeholderTextColor={colors.gray}
            style={styles.textInput}
          />
          <CustomTextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor={colors.gray}
            style={styles.textInput}
            secureTextEntry
          />
          <CustomText onPress={forgotPassword} style={styles.forgotText}>
            {' '}
            Forgot password?
          </CustomText>
          <CustomButton
            onPress={onSubmit}
            loading={loading}
            title="Sign in"
            style={styles.LoginButton}
          />
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginVertical: HP(2),
              // backgroundColor: 'red',
              height: HP(5),
            }}>
            <CustomText style={styles.createAccount}>
              {' '}
              Not account?{' '}
              <CustomText onPress={() => {}} style={styles.forgotText}>
                {' '}
                Create Account
              </CustomText>
            </CustomText>
          </View>
          <View style={styles.separatorContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>
          <View>
            <CustomButton style={styles.button} onPress={googleLogin}>
              <View style={styles.buttonContent}>
                <GoogleSvg />
                <CustomText style={styles.buttonText}>
                  Continue with Google
                </CustomText>
              </View>
            </CustomButton>
            <CustomButton onPress={githubLogin} style={styles.button}>
              <View style={styles.buttonContent}>
                <GithubSvg />
                <CustomText style={styles.buttonText}>
                  Continue with Github
                </CustomText>
              </View>
            </CustomButton>
          </View>
          <View style={styles.lastView}>
            <CustomText style={styles.separateText}>Terms of Use</CustomText>
            <View style={styles.separator} />
            <CustomText style={styles.separateText}>Privacy Policy</CustomText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HP(100),
    width: WP(100),
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  header: {
    height: HP(20),
    width: WP(90),
    justifyContent: 'center',

    alignItems: 'center',
  },
  heading: {
    fontSize: FontSize.h2_7,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: HP(2),
    color: colors.black,
    fontFamily: fonts.PopinsRegular,
  },
  mainView: {
    height: HP(80),
    width: WP(90),
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: WP(2),
    borderColor: colors.gray,
    padding: 0,
    marginBottom: HP(2),
  },
  forgotText: {
    fontSize: FontSize.h1_8,
    color: colors.lightGreen,
    fontFamily: fonts.PopinsRegular,
    fontWeight: '600',
  },
  createAccount: {
    fontSize: FontSize.h1_8,
    color: colors.black,
    fontFamily: fonts.PopinsRegular,
    fontWeight: '400',
  },
  LoginButton: {
    backgroundColor: colors.lightGreen,
    width: WP(90),
    marginTop: HP(3),
    height: HP(5),
    borderRadius: 15,
    fontWeight: '500',
    fontFamily: fonts.PopinsRegular,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: HP(3),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.dimGray,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.dimGray,
  },
  orText: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: colors.textGrey,
  },
  button: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'center',
    width: WP(90),
    paddingHorizontal: WP(5),
    backgroundColor: colors.white,
    marginVertical: HP(1),
    borderWidth: 1,
    borderColor: colors.gray,
    height: HP(5),
    borderRadius: 5,
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: WP(8),
    color: colors.black,
    fontFamily: fonts.PopinsRegular,
    fontSize: FontSize.h1_9,
    fontWeight: '500',
  },
  lastView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HP(2),
  },
  separateText: {
    fontSize: FontSize.h1_6,
    fontFamily: fonts.PopinsRegular,
    color: colors.gray,
    fontWeight: '400',
  },
  separator: {
    marginHorizontal: WP(2),
    height: HP(1.8),
    width: 1,
    backgroundColor: colors.gray,
  },
});
export default LoginWithAuth