import React, { useState, useEffect, useContext, useCallback } from "react";
import { View, FlatList, Image, Dimensions, StyleSheet } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { THEME } from "../theme";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";
import { AppLoader } from "../components/ui/AppLoader";
import { AppText } from "../components/ui/AppText";
import { AppButton } from "../components/ui/AppButton";

export const MainScreen = () => {
  const { todos, addTodo, removeTodo, fetchTodos, loading, error } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);

  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2);

  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, [])

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2;

      setDeviceWidth(width);
    };

    Dimensions.addEventListener("change", update);

    return () => {
      Dimensions.addEventListener("change", update).remove();
    }
  })

  if (loading) {
    return <AppLoader />
  }

  if (error) {
    return (
      <View style={ styles.center }>
        <AppText style={ styles.error }>
          { error }
        </AppText>

        <AppButton onPress={ loadTodos }>Повторити</AppButton>
      </View>
    );
  }

  let content = (
    <View style={ { width: deviceWidth } }>
      <FlatList
        keyExtractor={ item => item.id }
        data={ todos }
        renderItem={({ item }) => (
          <Todo
            todo={ item }
            onRemove={ removeTodo }
            onOpen={ changeScreen }
          />
      )}
    />
    </View>
  );

  if (todos && todos.length === 0) {
    content = (
      <View style={ styles.imageWrapper }>
        <Image
          style={ styles.image }
          source={ require("../../assets/empty-list.jpg") }
          />
      </View>
    );
  }

  return (
    <View>
      <AddTodo onSubmit={ addTodo } />

      { content }
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    height: 300,
    backgroundColor: "#157355",
    borderRadius: "50%",
  },
  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontSize: 20,
    color: THEME.DANGER_COLOR,
  },
});
