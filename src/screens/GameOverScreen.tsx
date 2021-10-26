import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen: React.FC<Props> = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>The Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = {
  roundsNumber: number;
  userNumber: number;
  onRestart: () => void;
};

export default GameOverScreen;
