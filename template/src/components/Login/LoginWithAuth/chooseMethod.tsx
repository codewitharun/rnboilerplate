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

const ChooseAuth = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    height: HP(100),
    width: WP(100),
  },
});
export default ChooseAuth;
