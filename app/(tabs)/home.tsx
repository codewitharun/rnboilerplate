import { MainWrapper } from "@components/index";
import { DashboardScreen } from "@src/screens/afterLogin";
import React from "react";
import { StyleSheet } from "react-native";

const HomeTab = () => {
  return (
    <MainWrapper>
      <DashboardScreen />
    </MainWrapper>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
