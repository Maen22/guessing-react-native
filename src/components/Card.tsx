import React from "react";
import { View, StyleSheet } from "react-native";

const Card: React.FC<Props> = ({ children, extraStyles }) => {
  return <View style={{ ...styles.card, ...extraStyles }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

type Props = {
  extraStyles?: any;
};

export default Card;
