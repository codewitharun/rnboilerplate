import { themeColors } from "@src/styles/colors";
import { HP, WP } from "@src/utils/constants";
import { fonts } from "@styles/fonts";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title?: string;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  loading = false,
  style,
  textStyle,
  children,
  disabled = false,
  ...props
}) => {
  const gradientColors = disabled
    ? ["#D3C9B8", "#E7E1D6"] // Disabled gradient colors
    : [themeColors.primaryColor, themeColors.secondaryColor];

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={!disabled ? onPress : undefined}
      activeOpacity={disabled ? 1 : 0.7}
      {...props}
    >
      <LinearGradient
        colors={gradientColors}
        style={[styles.gradientButton, style]}
      >
        {loading ? (
          <ActivityIndicator size={30} color={"#fff"} />
        ) : children ? (
          children
        ) : (
          <Text style={[styles.text, textStyle]}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: HP(6),
    width: WP(90),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  gradientButton: {
    height: HP(6),
    width: WP(90),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#ffffff",
    fontSize: 22,
    fontFamily: fonts.questrial,
  },
});

export default CustomButton;
