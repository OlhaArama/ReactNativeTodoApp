import React from "react";
import { View, StyleSheet } from "react-native";

export const AppCard = (props) => (
  <View style={ {...styles.default, ...props.style } }>{ props.children }</View>
);

const styles = StyleSheet.create({
  default: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 8,
  },
});
