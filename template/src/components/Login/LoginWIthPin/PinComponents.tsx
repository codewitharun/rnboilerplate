import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {HP, WP} from '../../../utils/constants';
import {fonts, FontSize} from '../../../utils/fonts';
import colors from '../../../utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../CustomText';

const PinComponents = ({onPress, pin}) => {
  return (
    <View>
      <View style={styles.pinDisplay}>
        <Text style={styles.pinText}>{'*'.repeat(pin.length)}</Text>
      </View>
      <View style={styles.pinDisplay}>
        <CustomText style={{}}>Please enter your 4 digit passcode</CustomText>
      </View>
      <View style={styles.numberPad}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map(num => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => onPress(num)}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => onPress('clear')}>
          <Icon name="close" color={'#5A718B'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PinComponents;

const styles = StyleSheet.create({
  secondContainer: {
    height: HP(60),
    width: WP(100),
    // backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerContainer: {
    height: HP(40),
    width: WP(100),
    justifyContent: 'center',
    alignItems: 'center',
  },

  pinDisplay: {
    height: HP(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: HP(2),
  },
  pinText: {
    fontSize: FontSize.h3,
    fontWeight: 'bold',
    color: colors.textGrey,
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: WP(80),
  },
  button: {
    height: 70,
    width: 70,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'rgba(0, 0, 0, 0.19)',
    borderRadius: 50,
    margin: HP(1),
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  clearButton: {
    height: 70,
    width: 70,
    // backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 50,
    margin: HP(1),
  },
  buttonText: {
    fontSize: FontSize.h3,
    color: colors.textGrey,
  },
  welcomeBackText: {
    fontSize: FontSize.h4,
    color: '#5A718B',
    fontFamily: fonts.PopinsBold,
    fontWeight: 'bold',
    marginTop: HP(7),
  },
});
