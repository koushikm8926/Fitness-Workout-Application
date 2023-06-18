import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const WorkoutScreen = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ height: 170, width: "100%" }}
        source={{ uri: route.params.image }}
      />
      <Ionicons
        name="arrow-back-outline"
        size={24}
        color="white"
        style={{ position: "absolute", top: 50, left: 20 }}
      />
    </SafeAreaView>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
    backgroundColor: "white",
  },
});
