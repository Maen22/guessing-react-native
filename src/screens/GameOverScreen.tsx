import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import MainButton from "../components/MainButton";
import colors from "../constants/colors";
import defaultStyles from "../constants/default-styles";

const GameOverScreen: React.FC<Props> = (props) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get("window").height * 0.35,
    height: Dimensions.get("window").height * 0.35,
    borderRadius: (Dimensions.get("window").height * 0.35) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 40,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
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
