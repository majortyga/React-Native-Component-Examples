import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Carousel from "./src/Carousel";
import ParallaxCarousel from "./src/ParallaxCarousel";
import DynamicAnimatedHeaderWithItems from "./src/DynamicPageHeaderWithItems";
import PlacetoStayCard from "./src/PlaceToStayCard";
import SocialNetworkDetailsScreen from "./src/SocialNetworkDetailsScreen";
import StackedListWithAvatar from "./src/StackedListWithAvatar";
import SettingsScreen from "./src/SettingsScreen";
import CircularProgressBar from "./src/CircularProgressBar";
import { Link } from "expo-router";

const data = [
  { title: "Slide 1", image: require("../assets/1.jpg") },
  { title: "Slide 2", image: require("../assets/2.png") },
  { title: "Slide 3", image: require("../assets/3.png") },
  { title: "Slide 4", image: require("../assets/4.png") },
];

const menuItems = [
  { title: "Dynamic Header", component: "DynamicPageHeaderWithItems" },
  { title: "Carousel", component: "CarouselExample" },
  { title: "Parallax Carousel", component: "ParallaxCarouselExample" },
  { title: "Place to Stay Card", component: "PlaceToStayCard" },
  { title: "Stacked List With Avatar", component: "StackedListWithAvatar" },
  { title: "Settings Screen", component: "SettingsScreen" },
  { title: "CircularProgressBar", component: "CircularLoadingBarExample" },
  { title: "Pull to Refresh", component: "PullToRequest" },
  { title: "Number Count Animation", component: "NumberCountExample" },
  {
    title: "Social Network Details",
    component: "SocialNetworkDetailsScreen",
  },
];

const Index = () => {
  const [progress, setProgress] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        renderItem={({ item }) => {
          return (
            <Link href={`./src/${item.component}`} style={{ width: "50%" }}>
              <View
                style={{
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#333",
                  height: 200,
                  width: 200,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{item.title}</Text>
              </View>
            </Link>
          );
        }}
      />
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

export default Index;
