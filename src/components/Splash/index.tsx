import { themeColors } from "@src/styles/colors";
import { HP, WP } from "@src/utils/constants";
import { fonts } from "@styles/fonts";
import React from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import GradientScreenWrapper from "../GradientWrapper";

const Splash = () => {
  return (
    <GradientScreenWrapper
      style={{
        height: HP(100),
        width: WP(100),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar hidden={true} />

      <Text style={styles.midText}>FlipToe</Text>
    </GradientScreenWrapper>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: themeColors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  mainLogo: {
    width: "35%",
  },
  midText: {
    fontSize: 28,
    fontFamily: fonts.loraRegular,
    color: "#fff",
    textAlign: "center",
  },
});

export default Splash;
