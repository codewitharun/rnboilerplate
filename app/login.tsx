import GradientScreenWrapper from "@components/GradientWrapper";
import TypographyText from "@components/Typography";
import React from "react";
import { StyleSheet } from "react-native";

const login = () => {
  return (
    <GradientScreenWrapper>
      <TypographyText variant="subtitle"> Hello arun</TypographyText>
    </GradientScreenWrapper>
  );
};

export default login;

const styles = StyleSheet.create({});
