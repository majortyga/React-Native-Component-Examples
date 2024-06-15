import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgressBar = ({
  size,
  strokeWidth,
  progress,
  progressBarColor,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  // Validate and set default values if necessary
  const validatedSize = isNaN(size) ? 100 : size; // Default size to 100 if NaN
  const validatedStrokeWidth = isNaN(strokeWidth) ? 10 : strokeWidth; // Default strokeWidth to 10 if NaN
  const validatedProgress = isNaN(progress) ? 0 : progress; // Default progress to 0 if NaN

  // Calculate radius and circumference
  const radius = (validatedSize - validatedStrokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: validatedProgress,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [validatedProgress]);

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  return (
    <View style={{ width: validatedSize, height: validatedSize }}>
      <Svg width={validatedSize} height={validatedSize}>
        <Circle
          cx={validatedSize / 2}
          cy={validatedSize / 2}
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={validatedStrokeWidth}
          fill="none"
        />
        <AnimatedCircle
          cx={validatedSize / 2}
          cy={validatedSize / 2}
          r={radius}
          stroke={progressBarColor}
          strokeWidth={validatedStrokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{`${Math.round(validatedProgress)}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 24,
    color: "#3498db",
  },
});

export default CircularProgressBar;
