import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Animated,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { FontAwesome5 as FontAwesome, Feather } from "@expo/vector-icons";

const items = [
  {
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "Dubai",
    airport: "DXB",
    departure: "2022-10-10",
    arrival: "2023-04-01",
    price: 966,
  },
  {
    img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
    name: "Italy",
    airport: "VCE",
    departure: "2022-10-10",
    arrival: "2023-04-01",
    price: 652,
  },
  {
    img: "https://images.unsplash.com/photo-1623536167776-922ccb1ff749?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=544&q=80",
    name: "Bosnia",
    airport: "BNX",
    departure: "2022-10-10",
    arrival: "2023-04-01",
    price: 566,
  },
  {
    img: "https://images.unsplash.com/photo-1554939437-ecc492c67b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "Spain",
    airport: "BCN",
    departure: "2022-10-10",
    arrival: "2023-04-01",
    price: 602,
  },
];

export default function DynamicAnimatedHeaderWithItems() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });
  const opacityTitle = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const translateTitle = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 40],
    extrapolate: "clamp",
  });

  return (
    <View style={{ backgroundColor: "#05141c" }}>
      <StatusBar barStyle="light-content" />
      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY: translateHeader }] },
        ]}
      >
        <Animated.Text
          style={[
            styles.headerTitle,
            { opacity: opacityTitle },
            ,
            { transform: [{ translateY: translateTitle }] },
          ]}
        >
          Cheap flights{"\n"}to anywhere from GCI
        </Animated.Text>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Where are you going?"
            placeholderTextColor="#05141c"
            style={styles.input}
          />

          <View style={styles.inputIcon}>
            <Feather color="#05141c" name="search" size={16} />
          </View>
        </View>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={styles.content}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
        scrollEventThrottle={1}
      >
        {items.map(
          ({ img, name, airport, departure, arrival, price }, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                >
                  <View style={styles.card}>
                    <Image
                      alt=""
                      resizeMode="cover"
                      source={{ uri: img }}
                      style={styles.cardImg}
                    />

                    <View style={styles.cardBody}>
                      <Text>
                        <Text style={styles.cardTitle}>{name}</Text>{" "}
                        <Text style={styles.cardAirport}>{airport}</Text>
                      </Text>

                      <View style={styles.cardRow}>
                        <View style={styles.cardRowItem}>
                          <FontAwesome
                            color="#6f61c4"
                            name="plane-departure"
                            size={10}
                          />

                          <Text style={styles.cardRowItemText}>
                            {new Date(departure).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </Text>
                        </View>

                        <View style={styles.cardRowItem}>
                          <FontAwesome
                            color="#6f61c4"
                            name="plane-arrival"
                            size={10}
                          />

                          <Text style={styles.cardRowItemText}>
                            {new Date(arrival).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </Text>
                        </View>
                      </View>

                      <Text style={styles.cardPrice}>
                        <Text>from </Text>

                        <Text style={styles.cardPriceValue}>
                          ${price.toLocaleString("en-US")}{" "}
                        </Text>

                        <Text style={styles.cardPriceCurrency}>USD</Text>
                      </Text>

                      <TouchableOpacity
                        onPress={() => {
                          // handle onPress
                        }}
                      >
                        <View style={styles.btn}>
                          <Text style={styles.btnText}>Book now</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }
        )}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
    paddingTop: 212,
    backgroundColor: "#fff",
  },
  /** Header */
  header: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    height: 200,
    alignItems: "stretch",
    justifyContent: "flex-end",
    backgroundColor: "#05141c",
  },
  headerTitle: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 12,
  },
  /** Input */
  input: {
    height: 44,
    backgroundColor: "#fff",
    paddingLeft: 44,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
  },
  inputIcon: {
    position: "absolute",
    width: 44,
    height: 44,
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  /** Card */
  card: {
    flexDirection: "row",
    alignItems: "stretch",
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  cardImg: {
    width: 120,
    height: 154,
    borderRadius: 12,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#173153",
    marginRight: 8,
  },
  cardAirport: {
    fontSize: 13,
    fontWeight: "600",
    color: "#5f697d",
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: -8,
    flexWrap: "wrap",
  },
  cardRowItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  cardRowItemText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "500",
    color: "#5f697d",
  },
  cardPrice: {
    fontSize: 13,
    fontWeight: "500",
    color: "#5f697d",
  },
  cardPriceValue: {
    fontSize: 21,
    fontWeight: "700",
    color: "#173153",
  },
  cardPriceCurrency: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6f61c4",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    backgroundColor: "#173153",
    borderColor: "#173153",
  },
  btnText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
