// CustomButton.tsx
import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import {HP, WP} from '../../utils/constants';

interface CustomButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title?: string;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  loading = false,
  style,
  textStyle,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...props}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : children ? (
        children
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: HP(4),
    width: WP(80),
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomButton;
