import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import ParallaxCarousel from "./ParallaxCarousel";

const ParallaxCarouselExample = () => {
  const data = [
    { title: "Slide 1", image: require("../../assets/1.jpg") },
    { title: "Slide 2", image: require("../../assets/2.png") },
    { title: "Slide 3", image: require("../../assets/3.png") },
    { title: "Slide 4", image: require("../../assets/4.png") },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxCarousel data={data} />
    </SafeAreaView>
  );
};

export default ParallaxCarouselExample;

const styles = StyleSheet.create({});
