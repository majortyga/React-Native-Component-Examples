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

const Carousel = ({ data, autoplay = true, interval = 3000 }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  useEffect(() => {
    if (autoplay) {
      const autoPlayInterval = setInterval(() => {
        let nextIndex = Math.floor(scrollX._value / width) + 1;
        if (nextIndex >= data.length) {
          nextIndex = 0;
        }
        flatListRef.current.scrollToOffset({
          offset: nextIndex * width,
          animated: true,
        });
      }, interval);

      return () => clearInterval(autoPlayInterval);
    }
  }, [autoplay, interval, data.length, scrollX]);

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
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Animated.Image
                  source={item.image}
                  resizeMode="cover"
                  style={[styles.image]}
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
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: width / 2,
    height: height / 2,
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

export default Carousel;
