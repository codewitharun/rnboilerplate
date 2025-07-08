import { themeColors } from "@src/styles/colors";
import { HP, WP } from "@src/utils/constants";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  LayoutChangeEvent,
  SafeAreaView,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  onLayout?: (event: LayoutChangeEvent) => void; // 👈 accept onLayout
}

const GradientScreenWrapper: React.FC<Props> = ({
  children,
  style,
  onLayout,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[themeColors.secondaryColor, "#ffffff"]}
        style={styles.container}
      >
        <View style={[styles.contentWrapper, style]} onLayout={onLayout}>
          {children}
        </View>
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
    width: WP(95),
    height: HP(100),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GradientScreenWrapper;
