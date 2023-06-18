import { Platform, StyleSheet, Text, View, SafeAreaView ,Image} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

const FitScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];
  console.log(current, "first excersise");
  return (
    <SafeAreaView style={styles.container}>
     <Image style={{width:'100%', height:350,}} source={{uri:current.image}} />
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});
