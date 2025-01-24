import React, {useState} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HP, WP} from '../../../utils/constants';
import CustomText from '../../CustomText';
import colors from '../../../utils/colors';
import {fonts, FontSize} from '../../../utils/fonts';
import CustomTextInput from '../../CustomTextInput/TextInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../CustomButton/Button';
import imagePath from '../../../utils/imagePath';

interface CustomViewProps {
  onSubmit: () => void;
  forgotPassword: () => void;
  userName: string;
  setUsername: (txt: string) => void;
  loading?: boolean;
  password: string;
  setPassword: (txt: string) => void;
}

const Usernameandpassword: React.FC<CustomViewProps> = ({
  onSubmit,
  forgotPassword,
  userName,
  setUsername,
  loading = false,
  password,
  setPassword,
}) => {
  const [focusedInput, setFocusedInput] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={imagePath.usernameHeader}
            style={styles.logoView}>
            <CustomText>Your Logo Here</CustomText>
          </ImageBackground>
          <View style={styles.contentContainer}>
            <View>
              <CustomText style={styles.loginText}>Login with Lorem</CustomText>
            </View>
            <View>
              <CustomText style={styles.descriptionText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </CustomText>
            </View>
            <View style={styles.textBoxView}>
              <CustomText style={styles.textBoxLabel}>User name</CustomText>
              <CustomTextInput
                onChangeText={txt => setUsername(txt)}
                value={userName}
                style={[
                  styles.textInput,
                  {
                    borderBottomColor:
                      focusedInput === 1 ? colors.linkGreen : colors.gray,
                    borderBottomWidth: focusedInput === 1 ? 2 : 1,
                  },
                ]}
                onFocus={() => setFocusedInput(1)}
                onBlur={() => setFocusedInput(null)}
              />
              <CustomText style={styles.textBoxLabel}>
                Enter your Password
              </CustomText>
              <CustomTextInput
                iconColor={colors.gray}
                value={password}
                onChangeText={txt => setPassword(txt)}
                iconSize={20}
                secureTextEntry
                style={[
                  styles.textInput,
                  {
                    borderBottomColor:
                      focusedInput === 2 ? colors.linkGreen : colors.gray,
                    borderBottomWidth: focusedInput === 2 ? 2 : 1,
                  },
                ]}
                onFocus={() => setFocusedInput(2)}
                onBlur={() => setFocusedInput(null)}
              />
              <View style={styles.rememberMeContainer}>
                <View style={styles.rememberMeInnerContainer}>
                  <Icon
                    onPress={() => setChecked(!checked)}
                    name={
                      checked ? 'checkbox-outline' : 'checkbox-blank-outline'
                    }
                    color={colors.gray}
                    size={20}
                  />
                  <CustomText style={styles.rememberText}>
                    Remember me
                  </CustomText>
                </View>
                <CustomText
                  onPress={forgotPassword}
                  style={styles.rememberText}>
                  Forgot Password ?
                </CustomText>
              </View>
              <View style={styles.loginButtonContainer}>
                <CustomButton
                  title="LogIn"
                  textStyle={styles.loginButtonText}
                  style={styles.loginButton}
                  onPress={onSubmit}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logoView: {
    width: WP(100),
    height: HP(25),
    resizeMode: 'contain',
  },
  contentContainer: {
    width: WP(90),
    height: HP(75),
  },
  loginText: {
    color: colors.black,
    fontSize: FontSize.h3,
    lineHeight: HP(5),
    fontWeight: '500',
    marginTop: HP(2),
    fontFamily: fonts.PopinsRegular,
  },
  descriptionText: {
    fontWeight: '400',
    fontSize: FontSize.h2,
    lineHeight: HP(3),
    color: colors.gray,
  },
  link: {
    fontWeight: '400',
    fontSize: FontSize.h2,
    lineHeight: HP(3),
    color: colors.linkGreen,
    fontFamily: fonts.PopinsRegular,
  },
  textBoxView: {
    marginVertical: HP(2),
    height: HP(25),
  },
  textBoxLabel: {
    color: colors.lightBlue,
    fontSize: FontSize.h2,
    lineHeight: HP(2),
    marginVertical: HP(1),
    fontFamily: fonts.PopinsRegular,
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
    fontWeight: '400',
    color: colors.gray,
    fontFamily: fonts.PopinsRegular,
  },
  loginButtonContainer: {
    marginVertical: HP(4),
  },
  loginButtonText: {
    fontSize: FontSize.h2,
    fontWeight: '500',
    fontFamily: fonts.PopinsRegular,
  },
  loginButton: {
    width: WP(90),
    height: HP(7),
    borderRadius: 10,
    backgroundColor: colors.darkBlue,
  },
  separateText: {
    fontSize: FontSize.h2,
    lineHeight: 16,
    fontWeight: '500',
    color: colors.gray,
    textAlign: 'center',
    fontFamily: fonts.PopinsRegular,
  },
  socialLoginView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: HP(2),
    width: WP(40),
    alignSelf: 'center',
  },
  textInput: {
    borderWidth: 1,
    height: HP(8),
    borderRadius: 10,
    borderColor: colors.gray,
    padding: 0,
  },
});

export default Usernameandpassword;
