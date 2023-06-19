import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const FitScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];
  console.log(current, "first excersise");
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: "100%", height: 370 }}
        source={{ uri: current.image }}
      />
      <Text
        style={{
          marginTop: 30,
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {current.name}
      </Text>
      <Text
        style={{
          marginTop: 30,
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: 38,
          fontWeight: "bold",
        }}
      >
        X{current.sets}
      </Text>
{index+1>= excersise.length?(
  <Pressable
        onPress={() => {
          navigation.navigate("Home");
        
        }}
        style={{
          backgroundColor: "blue",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
          borderRadius: 25,
          padding: 10,
          width: 250,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
          }}
        >
          Done
        </Text>
      </Pressable>
):(
  <Pressable
        onPress={() => {
          navigation.navigate("Rest");
          setTimeout(() => {
            setIndex(index + 1);
          }, 2000);
        }}
        style={{
          backgroundColor: "blue",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
          borderRadius: 25,
          padding: 10,
          width: 250,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
          }}
        >
          Done
        </Text>
      </Pressable>
)}
    
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            width: 120,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Prev
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            width: 120,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Skip
          </Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});
