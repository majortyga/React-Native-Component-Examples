import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel from "./Carousel";

const CarouselExample = () => {
  const data = [
    { title: "Slide 1", image: require("../../assets/1.jpg") },
    { title: "Slide 2", image: require("../../assets/2.png") },
    { title: "Slide 3", image: require("../../assets/3.png") },
    { title: "Slide 4", image: require("../../assets/4.png") },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Carousel data={data} autoplay={true} interval={3000} />
    </SafeAreaView>
  );
};

export default CarouselExample;

const styles = StyleSheet.create({});
