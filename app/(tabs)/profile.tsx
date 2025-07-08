import { MainWrapper } from "@components/index";
import { ProfileScreen } from "@src/screens/afterLogin";
import React from "react";
import { StyleSheet } from "react-native";

const ProfileTab = () => {
  return (
    <MainWrapper>
      <ProfileScreen />
    </MainWrapper>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({});
