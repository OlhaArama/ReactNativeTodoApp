import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Navbar } from "./components/Navbar";
import { THEME } from "./theme";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenContext } from "./context/screen/screenContext";


export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  return (
    <View style={ styles.wrapper }>
      <Navbar title="Todo App" />

      <View style={ styles.container }>
        { todoId ? <TodoScreen /> : <MainScreen /> }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
  wrapper: {
    flex: 1,
  }
});
