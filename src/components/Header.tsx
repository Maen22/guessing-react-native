import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

type Props = {
  title: string;
};

export default Header;
