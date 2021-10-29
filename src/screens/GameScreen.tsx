import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

const renderItemList = (
  listLength: number,
  itemData: ListRenderItemInfo<number>
) => {
  return (
    <View style={styles.listItem}>
      <Text style={defaultStyles.bodyText}>#{listLength - itemData.index}</Text>
      <Text style={defaultStyles.bodyText}>{itemData.item}</Text>
    </View>
  );
};

const GameScreen: React.FC<Props> = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [pastGuesses, setPastGuesses] = useState<Array<number>>([initialGuess]);
  const currentMin = useRef<number>(1);
  const currentMax = useRef<number>(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(pastGuesses.length);
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
      currentMin.current = currentGuess + 1;
    }
    const nextGuess = generateRandomBetween(
      currentMin.current,
      currentMax.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setPastGuesses((currState) => [nextGuess, ...currState]);
  };

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card extraStyles={styles.buttonsContainer}>
        <MainButton onClick={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={25} color="white" />
        </MainButton>
        <MainButton onClick={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={25} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView>
          {pastGuesses.map((guess, index) => {
            const round = pastGuesses.length - index;
            return (
              <View key={guess} style={styles.listItem}>
                <Text style={defaultStyles.bodyText}>#{round}</Text>
                <Text style={defaultStyles.bodyText}>{guess}</Text>
              </View>
            );
          })}
        </ScrollView> */}
        <FlatList
          data={pastGuesses}
          keyExtractor={(item) => item.toString()}
          renderItem={renderItemList.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height >= 600 ? 15 : 5,
    width: 400,
    maxWidth: "90%",
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get("window").width > 350 ? "60%" : "80%",
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

type Props = {
  userChoice: number;
  onGameOver: (value: number) => void;
};

export default GameScreen;
