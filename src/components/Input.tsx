import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

const Input: React.FC<Props & TextInputProps> = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.input, ...props.extraStyles }} />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

type Props = {
  extraStyles?: any;
};

export default Input;
