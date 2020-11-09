import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // импорт компонента иконки
import { THEME } from "../theme";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
      // делает уход клавы
      // Keyboard помогает управлять клавой
      Keyboard.dismiss();
    } else {
      Alert.alert("Названите таска не может быть пустым");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Введите название таска..."
        autoCorrect={true}
        autoCapitalize="sentences"
        keyboardType="default"
      />
      {/* Добавление иконки с сохранение кнопки */}
      <AntDesign.Button onPress={pressHandler} name="pluscircleo">
        Добавить
      </AntDesign.Button>
      {/* <Button title="Добавить" onPress={pressHandler}/> */}
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
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
  },
});
