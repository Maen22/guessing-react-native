import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import colors from "../constants/colors";
import defaultStyles from "../constants/default-styles";

const Header: React.FC<Props> = (props) => {
  return (
    <View style={styles.header}>
      <Text style={{ ...styles.headerTitle, ...defaultStyles.title }}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? colors.primary : "white",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? colors.primary : "black",
    fontSize: 18,
  },
});

type Props = {
  title: string;
};

export default Header;
