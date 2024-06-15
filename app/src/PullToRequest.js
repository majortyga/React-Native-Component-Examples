import React, { useState, useCallback } from "react";
import { View, FlatList, Text, RefreshControl, StyleSheet } from "react-native";

const PullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([
    { key: "Item 1" },
    { key: "Item 2" },
    { key: "Item 3" },
    { key: "Item 4" },
    { key: "Item 5" },
  ]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      // Add new data or update existing data
      setData([
        { key: "New Item 1" },
        { key: "New Item 2" },
        { key: "New Item 3" },
        { key: "New Item 4" },
        { key: "New Item 5" },
      ]);
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        keyExtractor={(item) => item.key}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default PullToRefresh;
