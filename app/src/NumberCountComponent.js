// AnimatedCounter.js
import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, View, StyleSheet, Easing } from "react-native";

/**
 * AnimatedCounter Component by GCI
 * @param {Object} props - Props for the component
 * @param {number} props.start - The starting number for the counter.
 * @param {number} props.end - The ending number for the counter.
 * @param {number} props.duration - The duration of the animation in milliseconds.
 * @param {function} [props.easing] - The easing function for the animation, Value can be
 * @param {function} [props.easing] - Easing.linear: A linear function (default).
 * @param {function} [props.easing] - Easing.bounce: A bouncing effect at the end.
 * @param {function} [props.easing] - Easing.ease: A standard ease-in-out function.
 * @param {function} [props.easing] - Easing.elastic(n): An elastic effect, where n controls the elasticity.
 * @param {function} [props.easing] - Easing.quad: A quadratic easing function.
 * @param {function} [props.easing] - Easing.cubic: A cubic easing function.
 * @param {function} [props.easing] - Easing.sin: A sinusoidal easing function.
 * @param {function} [props.easing] - Easing.circle: A circular easing function.
 * @param {function} [props.easing] - Easing.exp: An exponential easing function..
 */
const AnimatedCounter = ({ start, end, duration, easing }) => {
  const animatedValue = useRef(new Animated.Value(start)).current;
  const [displayValue, setDisplayValue] = useState(start);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: end,
      duration: duration,
      easing: easing || Easing.linear,
      useNativeDriver: false,
    }).start();

    animatedValue.addListener(({ value }) => {
      setDisplayValue(Math.floor(value));
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [end, duration, easing]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 48,
    fontWeight: "bold",
  },
});

export default AnimatedCounter;
