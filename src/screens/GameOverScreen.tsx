import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import defaultStyles from "../constants/default-styles";

const GameOverScreen: React.FC<Props> = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.bodyText}>The Game is Over!</Text>
      <Text style={defaultStyles.bodyText}>
        Number of rounds: {props.roundsNumber}
      </Text>
      <Text style={defaultStyles.bodyText}>
        The Number was: {props.userNumber}
      </Text>
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
