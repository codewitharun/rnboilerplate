import GradientScreenWrapper from "@components/GradientWrapper";
import TypographyText from "@components/Typography/TypographyText";
import React from "react";
import { StyleSheet } from "react-native";

const index = () => {
  return (
    <GradientScreenWrapper>
      <TypographyText variant="heading2">Welcome to my page!!</TypographyText>
      <TypographyText variant="subtitle">
        Edit index.tsx and enjoy the journey
      </TypographyText>
    </GradientScreenWrapper>
  );
};

export default index;

const styles = StyleSheet.create({});
