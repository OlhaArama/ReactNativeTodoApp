import React, { useState } from "react";
import {  Alert } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import { TodoState } from "./src/context/todo/TodoState";
import { ScreenState } from "./src/context/screen/ScreenState";
import { MainLayout } from "./src/MainLayout";

SplashScreen.preventAutoHideAsync();

async function loadApplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    try {
      loadApplication();
    } catch (error) {
      console.log(error);
    } finally {
      setIsReady(true);
    }
  } else {
    SplashScreen.hide();
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  )
}
