import React from "react";
import { View, StyleSheet } from "react-native";

export const AppCard = (props) => (
  /* используем раскрытие объектов, чтобы применить стороние стили */
  <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
);

const styles = StyleSheet.create({
  default: {
    padding: 20,
    alignItems: "center",
    /*
    так задаётся тень(для айфона):
    цвет;
    радиус;
    расплывчивость;
    смещение(объектом, как по ширине и по высоте)
    */
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: "#fff",
    borderRadius: 10,
    /* а вот так для андроида :/ системные */
    elevation: 15,
  },
});
