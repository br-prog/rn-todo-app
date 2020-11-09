// хук useState нужен для юза стейта
import React, { useState } from "react";
import * as Font from "expo-font";
/* данный компонент помогает сначала дождаться загрузку стороннего, а потом рендер приложения */
import { AppLoading } from "expo";

import { TodoState } from "./src/context/todo/TodoState";
import { ScreenState } from "./src/context/screen/ScreenState";
import { MainLayout } from "./src/MainLayout";

/* так асинхроно мы загружаем фонты в проект(локально) */
async function loadApplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)} /* обязательный аттрибут */
      />
    );
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}
