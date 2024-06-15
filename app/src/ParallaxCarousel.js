import React, { useRef, useEffect } from "react";
import {
  View,
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  Text,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ParallaxCarousel = ({ data }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const dotPosition = Animated.divide(scrollX, width);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          let translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
            extrapolate: "clamp",
          });

          return (
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Animated.Image
                  source={item.image}
                  resizeMode="cover"
                  style={[
                    styles.image,
                    {
                      transform: [{ translateX }],
                    },
                  ]}
                />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.dotContainer}>
        {data.map((_, i) => {
          let opacity = dotPosition.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          return <Animated.View key={i} style={[styles.dot, { opacity }]} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  imageContainer: {
    width: width / 1.4,
    height: height / 1.4,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    overflow: "hidden",
  },
  image: {
    width: width * 1.3,
    height: height * 1.3,
  },
  text: {
    color: "white",
    marginTop: 10,
  },
  dotContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: "#595959",
    margin: 8,
    borderRadius: 5,
  },
});

export default ParallaxCarousel;
