import React from "react";
import { SafeAreaView, Text, View, Button, StyleSheet } from "react-native";
import Carousel from "./src/Carousel";
import ParallaxCarousel from "./src/ParallaxCarousel";
import DynamicAnimatedHeaderWithItems from "./src/DynamicPageHeaderWithItems";
import PlacetoStayCard from "./src/PlaceToStayCard";
import SocialNetworkDetailsScreen from "./src/SocialNetworkDetailsScreen";
import StackedListWithAvatar from "./src/StackedListWithAvatar";
import SettingsScreen from "./src/SettingsScreen";
import CircularProgressBar from "./src/CircularProgressBar";

const data = [
  { title: "Slide 1", image: require("./assets/1.jpg") },
  { title: "Slide 2", image: require("./assets/2.png") },
  { title: "Slide 3", image: require("./assets/3.png") },
  { title: "Slide 4", image: require("./assets/4.png") },
];

const App = () => {
  const [progress, setProgress] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Carousel data={data} autoplay={true} interval={3000} /> */}
      {/* <ParallaxCarousel data={data} /> */}
      <DynamicAnimatedHeaderWithItems />
      {/* <PlacetoStayCard /> */}
      {/* <SocialNetworkDetailsScreen /> */}
      {/* <StackedListWithAvatar /> */}
      {/* <SettingsScreen /> */}

      {/* Circle Progress Bar*/}
      {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <CircularProgressBar
          size={200}
          strokeWidth={30}
          progress={progress}
          progressBarColor={"#3498db"}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Increase Progress"
            onPress={() => setProgress((prev) => (prev >= 100 ? 0 : prev + 10))}
          />
        </View>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    backgroundColor: "#fff",
  },
});

export default App;
