import React from 'react';
import {
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
  ImageBackground,
  ViewProps,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {HP, WP} from '../../utils/constants';
import IMAGE from '../../utils/imagePath';
import CustomText from '../CustomText';
import colors from '../../utils/colors';
import {fonts, FontSize} from '../../utils/fonts';
import CustomTextInput from '../CustomTextInput/TextInput';
import CustomButton from '../CustomButton/Button';
import {emailValidator, passwordValidator} from '../../utils/validation';

interface CustomViewProps extends ViewProps {
  userName: string;
  password: string;
  setUsername: (txt: string) => void;
  setPassword: (txt: string) => void;
  loading?: boolean;
  onSubmit: (credentials: string) => void;
  googleLogin: () => void;
  facebookLogin: () => void;
  forgotPassword: (email: string) => void;
}

const UserNameSocial: React.FC<CustomViewProps> = ({
  userName,
  password,
  setUsername,
  setPassword,
  loading = false,
  onSubmit,
  googleLogin,
  facebookLogin,
  forgotPassword,
}) => {
  const emailCheck = userName.length > 0 ? emailValidator(userName) : null;
  const passwordCheck =
    password.length > 0 ? passwordValidator(password) : null;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <ImageBackground
            source={IMAGE.usernameSocial}
            style={styles.headerContainer}>
            <CustomText style={styles.welcomeBackText}>Welcome Back</CustomText>
            <CustomText style={styles.welcomeMessage}>
              Welcome back to Estero. Have a good time
            </CustomText>
          </ImageBackground>
          <View style={styles.secondView}>
            <CustomTextInput
              value={userName}
              iconName="account"
              iconSize={20}
              iconColor={colors.PLACEHOLDER}
              placeholder="Username"
              onChangeText={setUsername}
              style={styles.textInput}
              errorText={emailCheck && emailCheck}
            />
            <CustomTextInput
              value={password}
              iconName="lock"
              iconSize={20}
              iconColor={colors.PLACEHOLDER}
              placeholder="Password"
              secureTextEntry
              onChangeText={setPassword}
              style={styles.textInput}
              errorText={passwordCheck && passwordCheck}
            />

            <CustomText
              onPress={() => forgotPassword}
              style={styles.forgotPasswordText}>
              forgot password?
            </CustomText>
            <CustomButton
              onPress={() => onSubmit({userName, password})}
              loading={loading}
              style={styles.loginButton}
              title="Login"
            />
            <View style={styles.separatorContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.socialButtonsContainer}>
              <CustomButton
                title="Facebook"
                loading={loading}
                onPress={facebookLogin}
                style={[
                  styles.socialButton,
                  {backgroundColor: colors.FACEBOOK},
                ]}
              />
              <CustomButton
                title="Gmail"
                loading={loading}
                onPress={googleLogin}
                style={[styles.socialButton, {backgroundColor: colors.GMAIL}]}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  keyboardAvoidingView: {
    // flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  headerContainer: {
    height: HP(40),
    width: WP(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeBackText: {
    fontSize: FontSize.h5_5,
    color: colors.white,
    fontFamily: fonts.montserratSemibold,
  },
  welcomeMessage: {
    fontSize: FontSize.h2,
    color: colors.white,
    fontFamily: fonts.montserratSemibold,
    lineHeight: 40,
  },
  secondView: {
    height: HP(60),
    width: WP(80),
    justifyContent: 'center',
  },
  textInput: {
    fontFamily: fonts.PopinsRegular,
    borderBottomColor: colors.textGrey,
    borderBottomWidth: 1,
    // marginTop: HP(2),
  },
  forgotPasswordText: {
    fontSize: FontSize.h1_8,
    color: colors.textGrey,
    fontFamily: fonts.montserratSemibold,
    lineHeight: 20,
    textAlign: 'right',
  },
  loginButton: {
    marginTop: 30,
    height: HP(6),
    backgroundColor: colors.BUTTON,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: HP(5),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.textGrey,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.textGrey,
  },
  orText: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: colors.textGrey,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialButton: {
    width: WP(38),
    height: HP(5.2),
  },
});

export default UserNameSocial;
