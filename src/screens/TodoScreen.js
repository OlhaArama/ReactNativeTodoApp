import React, { useContext, useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { THEME } from "../theme";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppButton } from "../components/ui/AppButton";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";

export const TodoScreen = () => {
  const { todos, removeTodo, updateTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);
  const [modal, setModal] = useState(false);

  const todo = todos?.find(t => t.id === todoId);

  const saveHandler = async (title) => {
    await updateTodo(todo.id, title);
    setModal(false);
  };
  return (
    <View>
      <EditModal
        visible={ modal }
        value={ todo?.title || "" }
        onCancel={ () => setModal(false) }
        onSave={ saveHandler }
      />

      <AppCard style={ styles.card }>
        <AppTextBold style={ styles.title }>{ todo.title }</AppTextBold>

        <AppButton
          style={ styles.editButton }
          onPress={ () => setModal(true) }
        >
          <FontAwesome name="edit" size={ 20 } />
        </AppButton>
      </AppCard>

      <View style={ styles.buttons }>
        <View style={ styles.button }>
          <AppButton
            color={ THEME.GREY_COLOR }
            onPress={ () => changeScreen(null) }
          >
            <AntDesign name="back" size={ 20 } color="#fff" />
          </AppButton>
        </View>

        <View style={ styles.button }>
          <AppButton
            color={ THEME.DANGER_COLOR }
            onPress={ () => removeTodo(todo.id) }
          >
            <FontAwesome name="remove" size={ 20 } color="#fff" />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: Dimensions.get("window").width / 3,
  },
  title: {
    flex: 1,
    fontSize: 20,
  },
  editButton: {
    flex: 1,
  },
  card: {
    marginBottom: 20,
  }
});
