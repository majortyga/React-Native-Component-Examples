// App.js
import React from "react";
import { SafeAreaView, StyleSheet, Easing } from "react-native";
import AnimatedCounter from "./NumberCountComponent";

const NumberCountExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedCounter
        start={0}
        end={100}
        duration={5000}
        easing={Easing.bounce}
      />
      <AnimatedCounter
        start={1000}
        end={2000}
        duration={3000}
        easing={Easing.elastic(1)}
      />
      <AnimatedCounter
        start={100}
        end={0}
        duration={4000}
        easing={Easing.ease}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NumberCountExample;
