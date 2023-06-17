import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from '@expo/vector-icons';


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
          <MaterialCommunityIcons name="lightning-bolt" size={24} color="white" style={{position:'absolute', bottom:15,left:20,}} />
        </Pressable>
      ))}
     
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
