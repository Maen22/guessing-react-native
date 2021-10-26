import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import MainButton from "../components/MainButton";
import colors from "../constants/colors";
import defaultStyles from "../constants/default-styles";

const GameOverScreen: React.FC<Props> = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/success.png")}
          // IF IMAGE FROM WEB => source={{uri: ''}}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={{ ...defaultStyles.bodyText, ...styles.resultText }}>
          Your phone needed:{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </Text>
      </View>

      <MainButton onClick={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
});

type Props = {
  roundsNumber: number;
  userNumber: number;
  onRestart: () => void;
};

export default GameOverScreen;
