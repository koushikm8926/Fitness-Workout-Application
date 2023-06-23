import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../Context";
import { AntDesign } from '@expo/vector-icons';

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  // console.log(route.params);
  const {completed, setCompleted}= useContext(FitnessItems);  

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image
          style={{ height: 170, width: "100%" }}
          source={{ uri: route.params.image }}
        />
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-outline"
          size={28}
          color="white"
          style={{ position: "absolute", top: 20, left: 20 }}
        />

        {route.params.excersises.map((item, index) => (
          <Pressable
            key={index}
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
          >
            <Image
              style={{ height: 90, width: 90 }}
              source={{ uri: item.image }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 18, marginTop: 4, color: "grey", width:200, }}>
                X{item.sets}
              </Text>
            </View>
            {completed.includes(item.name)? (
              <AntDesign name="checkcircle" size={24} color="green" />
            ):(
              null
            )}
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
      onPress={()=>navigation.navigate("Fit", {
        excersises:route.params.excersises,
      })}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 15,
            color: "white",
            textAlign: "center",
          }}
        >
          START
        </Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
    backgroundColor: "white",
  },
});
