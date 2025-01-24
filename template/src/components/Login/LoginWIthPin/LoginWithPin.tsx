import React, {useState} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {HP, WP} from '../../../utils/constants';
import IMAGE from '../../../utils/imagePath';
import CustomText from '../../CustomText';
import colors from '../../../utils/colors';
import {fonts, FontSize} from '../../../utils/fonts';

import PinComponents from './PinComponents';

interface CustomViewProps extends ViewProps {
  loading?: boolean;
  onSubmit: () => void;
}

const LoginWithPin: React.FC<CustomViewProps> = ({
  loading = false,
  onSubmit,
}) => {
  const [pin, setPin] = useState('');

  const handlePress = (value: string) => {
    if (value === 'clear') {
      setPin('');
    } else if (pin.length < 4) {
      const newPin = pin + value;
      setPin(newPin);
      if (newPin.length === 4) {
        onSubmit();
        setPin('');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <CustomText style={styles.welcomeBackText}>Login</CustomText>
      </View>
      <View style={styles.newContainer}>
        <PinComponents onPress={handlePress} pin={pin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HP(100),
    width: WP(100),
    alignItems: 'center',
    position: 'relative',
  },

  secondContainer: {
    height: HP(40),
    width: WP(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PINLOGINHEADER,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  welcomeBackText: {
    fontSize: FontSize.h4,
    color: colors.white,
    fontFamily: fonts.PopinsBold,
    fontWeight: 'bold',
    marginBottom: HP(8),
  },

  newContainer: {
    position: 'absolute',
    top: HP(30) * 0.8,
    height: HP(60),
    width: WP(90),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: colors.white,
    borderWidth: 1,
    elevation: 5,
    shadowColor: colors.white,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  newContainerText: {
    fontSize: FontSize.h5,
    color: colors.black,
    fontFamily: fonts.PopinsRegular,
  },
});

export default LoginWithPin;
