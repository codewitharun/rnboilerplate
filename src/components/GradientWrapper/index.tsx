// components/Wrapper/GradientScreenWrapper.tsx
import { themeColors } from "@src/styles/colors";
import { HP, WP } from "@src/utils/constants";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView, StyleSheet, View, ViewStyle } from "react-native";
interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

const GradientScreenWrapper: React.FC<Props> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[themeColors.secondaryColor, "#ffffff"]}
        style={styles.container}
      >
        <View style={[styles.contentWrapper, style]}>{children}</View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WP(100),
    height: HP(100),
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
  },
  contentWrapper: {
    width: WP(95), // 95% width for centered content
    height: HP(100),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GradientScreenWrapper;
