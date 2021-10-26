import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const MainButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onClick}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

type Props = {
  onClick: () => void;
};

export default MainButton;