import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {HP, WP} from '../../../utils/constants';
import CustomText from '../../CustomText';
import colors from '../../../utils/colors';
import {fonts, FontSize} from '../../../utils/fonts';
import CustomTextInput from '../../CustomTextInput/TextInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../CustomButton/Button';
import GoogleSvg from '../../../assets/SVG/googleSvg';
import FacebookSVG from '../../../assets/SVG/facebook';
import AppleSvg from '../../../assets/SVG/appleSvg';

interface CustomViewProps {
  onSubmit: () => void;
  facebookLogin?: () => void;
  googleLogin?: () => void;
  appleLogin?: () => void;
  forgotPassword: () => void;
  userName: string;
  setUsername: (txt: string) => void;
  loading?: boolean;
  password: string;
  setPassword: (txt: string) => void;
}

const LoginWithPasswordandSocial: React.FC<CustomViewProps> = ({
  onSubmit,
  facebookLogin,
  googleLogin,
  appleLogin,
  forgotPassword,
  userName,
  setUsername,
  password,
  setPassword,
  loading = false,
}) => {
  const [focusedInput, setFocusedInput] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  const handleFocus = (input: number) => setFocusedInput(input);
  const handleBlur = () => setFocusedInput(null);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <CustomText>Your Logo Here</CustomText>
      </View>
      <View style={styles.contentContainer}>
        <View>
          <CustomText style={styles.loginText}>Log In</CustomText>
        </View>
        <View>
          <CustomText style={styles.descriptionText}>
            If you don’t have an account register You can{' '}
            <CustomText onPress={() => {}} style={styles.link}>
              Register here!
            </CustomText>
          </CustomText>
        </View>
        <View style={styles.textBoxView}>
          <CustomText style={styles.textBoxLabel}>Email</CustomText>
          <CustomTextInput
            iconName="email-outline"
            value={userName}
            onChangeText={setUsername}
            iconSize={25}
            style={[
              styles.textInput,
              {
                borderBottomColor:
                  focusedInput === 1 ? colors.linkGreen : colors.black,
              },
            ]}
            onFocus={() => handleFocus(1)}
            onBlur={handleBlur}
          />
          <CustomText style={styles.textBoxLabel}>Password</CustomText>
          <CustomTextInput
            iconName="lock-outline"
            value={password}
            onChangeText={setPassword}
            iconSize={25}
            secureTextEntry
            style={[
              styles.textInput,
              {
                borderBottomColor:
                  focusedInput === 2 ? colors.linkGreen : colors.black,
              },
            ]}
            onFocus={() => handleFocus(2)}
            onBlur={handleBlur}
          />
          <View style={styles.rememberMeContainer}>
            <View style={styles.rememberMeInnerContainer}>
              <Icon
                onPress={toggleCheckbox}
                name={checked ? 'checkbox-outline' : 'checkbox-blank-outline'}
                color="black"
                size={25}
              />
              <CustomText style={styles.rememberText}>Remember me</CustomText>
            </View>
            <CustomText onPress={forgotPassword} style={styles.rememberText}>
              Forgot Password ?
            </CustomText>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              loading={loading}
              title="Login"
              textStyle={styles.buttonText}
              style={styles.buttonStyle}
              onPress={onSubmit}
            />
          </View>
          <View>
            <CustomText style={styles.separateText}>
              or continue with
            </CustomText>
          </View>
          <View style={styles.socialLoginView}>
            <FacebookSVG onPress={facebookLogin} />
            {Platform.OS === 'ios' && <AppleSvg onPress={appleLogin} />}
            <GoogleSvg onPress={googleLogin} />
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
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logoView: {
    width: WP(90),
    height: HP(10),
  },
  contentContainer: {
    width: WP(90),
    height: HP(90),
  },
  loginText: {
    color: colors.black,
    fontSize: FontSize.h4,
    lineHeight: HP(6.5),
    fontFamily: fonts.PopinsRegular,
    fontWeight: '500',
  },
  descriptionText: {
    fontWeight: '400',
    fontSize: FontSize.h2,
    lineHeight: HP(2.5),
    color: colors.black,
    fontFamily: fonts.PopinsRegular,
  },
  link: {
    fontWeight: '600',
    fontSize: FontSize.h2,
    lineHeight: HP(2.5),
    color: colors.linkGreen,
    fontFamily: fonts.PopinsRegular,
  },
  textBoxView: {
    marginVertical: HP(4),
    height: HP(30),
  },
  textBoxLabel: {
    color: colors.black,
    fontSize: FontSize.h2,
    lineHeight: HP(2.5),
    fontFamily: fonts.PopinsRegular,
  },
  textInput: {
    borderBottomWidth: 2,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberMeInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: FontSize.h2,
    fontWeight: '200',
    fontFamily: fonts.PopinsRegular,
    color: colors.black,
  },
  buttonContainer: {
    marginVertical: HP(6),
  },
  buttonStyle: {
    width: WP(90),
    height: HP(6),
    borderRadius: 30,
    backgroundColor: colors.linkGreen,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    fontSize: FontSize.h2_5,
    fontWeight: '500',
  },
  separateText: {
    fontSize: FontSize.h2,
    lineHeight: HP(2),
    fontWeight: '500',
    fontFamily: fonts.PopinsRegular,
    color: colors.gray,
    textAlign: 'center',
  },
  socialLoginView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: HP(2),
    width: WP(40),
    alignSelf: 'center',
  },
});

export default LoginWithPasswordandSocial;
