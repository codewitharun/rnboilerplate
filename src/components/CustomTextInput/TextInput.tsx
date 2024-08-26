// CustomTextInput.js
import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {HP, WP} from '../../utils/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';

interface CustomTextInput extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (e: string) => void;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
}

const CustomTextInput: React.FC<CustomTextInput> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  style,
  iconName = '',
  iconSize = 20,
  iconColor = '#000',
  ...props
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, style]}>
      {iconName !== '' && (
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.PLACEHOLDER}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPasswordVisible}
        {...props}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}>
          <Icon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={iconSize}
            color={iconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: HP(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: HP(5),
    flex: 1,
    paddingLeft: 8,
    borderRadius: 4,
  },
  icon: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  eyeIcon: {
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default CustomTextInput;
