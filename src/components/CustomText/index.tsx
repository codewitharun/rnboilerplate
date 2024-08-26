import React, {ReactNode} from 'react';
import {Text, TextStyle} from 'react-native';
import styles from './styles';

interface CustomTextProps {
  children: ReactNode;
  onPress?: () => void;
  style?: TextStyle;
}

const CustomText = ({children, onPress, style}: CustomTextProps) => {
  return (
    <Text onPress={onPress} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default CustomText;
