import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import defaultStyles from "../constants/default-styles";
import MainButton from "../components/MainButton";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen: React.FC<Props> = (props) => {
  const [currentGuess, setCurrentGuess] = useState<number>(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentMin = useRef<number>(1);
  const currentMax = useRef<number>(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Dont't lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentMax.current = currentGuess;
    } else {
      currentMin.current = currentGuess;
    }
    setCurrentGuess(
      generateRandomBetween(
        currentMin.current,
        currentMax.current,
        currentGuess
      )
    );
    setRounds(rounds + 1);
  };

  return (
    <View style={styels.screen}>
      <Text style={defaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card extraStyles={styels.buttonsContainer}>
        <MainButton onClick={nextGuessHandler.bind(this, "lower")}>
          LOWER
        </MainButton>
        <MainButton onClick={nextGuessHandler.bind(this, "greater")}>
          GREATER
        </MainButton>
      </Card>
    </View>
  );
};

const styels = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%",
  },
});

type Props = {
  userChoice: number;
  onGameOver: (value: number) => void;
};

export default GameScreen;
