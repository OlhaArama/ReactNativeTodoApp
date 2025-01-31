import { React } from "react";
import { View, Platform, StyleSheet } from "react-native";
import { THEME } from "../theme";
import { AppTextBold } from "./ui/AppTextBold";

export const Navbar = ({ title }) => {
  return (
    <View
      style={{
          ...styles.navbar, 
          ...Platform.select({
            ios: styles.navbarIos,
            android: styles.navbarAndroid,
          })
      }}
    >
      <AppTextBold style={ styles.text }>{ title }</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIos: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    color: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    fontSize: 20,
  },
});
