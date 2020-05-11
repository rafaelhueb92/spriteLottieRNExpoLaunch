import React, { useEffect, useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  const [animation, setanimation] = useState();
  const [launchs, setlaunch] = useState(1);

  const resetAnimation = () => {
    animation.reset();
    animation.play();
    setlaunch(launchs + 1);
  };

  useEffect(() => {
    if (animation) animation.play();
  }, [animation]);

  return (
    <View style={styles.container}>
      <LottieView
        ref={(animRef) => setanimation(animRef)}
        loop={false}
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#eee",
        }}
        source={require("./sprites/rocket.json")}
      />
      <View style={styles.buttonContainer}>
        <Button title="Launch" onPress={resetAnimation} />
        <Text>Number of Lauchs {launchs}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
