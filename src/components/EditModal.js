import React, { useState } from "react";
import { Modal, View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { THEME } from "../theme";
import { AppButton } from "../components/ui/AppButton";

export const EditModal = ({ visible, value, onCancel, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Помилка!",
        `Мінімальна довжина назви завдання: 3 символи. Зараз довжина: ${title.trim().length}.`
      );
    } else {
      onSave(title);
    }
  };

  const cancelHandler = () => {
    setTitle(value);
    onCancel();
  };

  return (
    <Modal
      visible={ visible }
      animationType="slide"
      transparent={ false }
    >
      <View style={ styles.wrapper }>
        <TextInput
          value={ title }
          style={ styles.input }
          placeholder="Введіть назву"
          autoCapitalize="none"
          autoCorrect={ false }
          maxLength={ 64 }
          onChangeText={ setTitle }
        />

        <View style={ styles.buttonsWrapper }>
          <AppButton
            color={ THEME.DANGER_COLOR }
            onPress={ cancelHandler }
          >
            Відмінити
          </AppButton>

          <AppButton onPress={ saveHandler }>
            Зберегти
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
});
