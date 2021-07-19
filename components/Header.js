import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={headerStyles.main}>
      <Text style={headerStyles.text}>Список Дел</Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  main: {
    paddingTop: 60,
    height: 100,
    backgroundColor: "silver",
  },
  text: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});
