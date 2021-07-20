import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Form({ addHandler }) {
  const [text, setValue] = useState("");
  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View>
      <TextInput
        style={headerStyles.input}
        onChangeText={onChange}
        placeholder="впишите задачу"
        clearButtonMode="always"
      ></TextInput>
      <Button title={"Добавить задачу"} onPress={() => addHandler(text)} />
    </View>
  );
}

const headerStyles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
});
