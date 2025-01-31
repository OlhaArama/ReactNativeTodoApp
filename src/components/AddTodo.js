import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../theme";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Ви не можете створити завдання без назви!");
    }
  };

  return (
    <View style={ styles.block }>
      <TextInput
        style={ styles.input }
        value={ value }
        placeholder="Введіть назву завдання..."
        autoCorrect={ false }
        autoCapitalize="none"
        onChangeText={ setValue }
      />

      <AntDesign.Button onPress={ pressHandler } name="pluscircleo">
        Додати
      </AntDesign.Button>
      {/* <Button title="Додати" onPress={ pressHandler } /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "60%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});
