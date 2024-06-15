import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import CircularProgressBar from "./CircularProgressBar";

const CircularLoadingBarExample = () => {
  const [progress, setProgress] = React.useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CircularProgressBar
        size={300}
        strokeWidth={50}
        progress={progress}
        progressBarColor="#3498db"
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Increase Progress"
          onPress={() => setProgress((prev) => (prev >= 100 ? 0 : prev + 10))}
        />
      </View>
    </View>
  );
};

export default CircularLoadingBarExample;

const styles = StyleSheet.create({});
