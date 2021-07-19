import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(el.key)}>
      <Text style={lStyles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const lStyles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    marginTop: 20,
    width: "60%",
    marginLeft: "20%",
  },
});
