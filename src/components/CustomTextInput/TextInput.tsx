import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  errorText?: string;
  inputStyle?: StyleProp<TextStyle>;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  style,
  iconName,
  iconColor = "#000",
  iconSize = 20,
  errorText,
  inputStyle,
}) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(secureTextEntry);

  return (
    <View style={style}>
      <TextInput
        label={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && isPasswordVisible}
        mode="outlined"
        style={inputStyle}
        error={!!errorText}
        left={
          iconName ? (
            <TextInput.Icon
              icon={() => (
                <MaterialCommunityIcons
                  name={iconName}
                  size={iconSize}
                  color={iconColor}
                />
              )}
            />
          ) : undefined
        }
        right={
          secureTextEntry ? (
            <TextInput.Icon
              icon={isPasswordVisible ? "eye-off" : "eye"}
              onPress={() => setisPasswordVisible(!isPasswordVisible)}
            />
          ) : undefined
        }
      />
      {errorText && (
        <HelperText type="error" visible={!!errorText}>
          {errorText}
        </HelperText>
      )}
    </View>
  );
};

export default CustomTextInput;
