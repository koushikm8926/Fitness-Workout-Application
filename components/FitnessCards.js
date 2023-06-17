import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import fitness from "../data/fitness";
const FitnessCards = () => {
  const FitnessData = fitness;

  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable
          key={key}
          style={{ justifyContent: "center", alignItems: "center", margin: 10 }}
        >
          <Image
            style={{ height: 140, width: "95%", borderRadius: 7 }}
            source={{ uri: item.image }}
          />
          <Text style={{position:'absolute',color:'white', fontSize:16, fontWeight:'bold', left:20,top:20,   }}>{item.name}</Text>
        </Pressable>
      ))}
     
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
