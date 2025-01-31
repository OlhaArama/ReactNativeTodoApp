import React from "react";
import { View, TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet } from "react-native";
import { AppTextBold } from "../ui/AppTextBold";
import { THEME } from "../../theme";

export const AppButton = ({ children, color = THEME.MAIN_COLOR, onPress}) => {
  const Wrapper = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
  
  return (
    <Wrapper onPress={ onPress } activeOpacity={ 0.7 }>
      <View style={ {...styles.button, backgroundColor: color} }>
        <AppTextBold style={ styles.text }>
          { children }
        </AppTextBold>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  }, 
  text: {
    color: "#fff",
  }
});
