import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={{color:'white',fontWeight:'bold', fontSize:18,}}>HOME WORKOUT</Text>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:20,}}>
                <View>
                    <Text style={{textAlign:'center', fontWeight:'bold', color:'white', fontSize:18,}}>0</Text>
                    <Text style={{marginTop:6, color:'#D0D0D0', fontSize:17,}}>WORKOUT</Text>
                </View>

                <View>
                    <Text style={{textAlign:'center', fontWeight:'bold', color:'white', fontSize:18,}}>0</Text>
                    <Text style={{marginTop:6, color:'#D0D0D0', fontSize:17,}}>KCAL</Text>
                </View>

                <View>
                    <Text style={{textAlign:'center', fontWeight:'bold', color:'white', fontSize:18,}}>0</Text>
                    <Text style={{marginTop:6, color:'#D0D0D0', fontSize:17,}}>MINS</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS==="android" ? 45:0,
        height:200,
        backgroundColor:'#CD853F',
        padding:10,
        width:"100%",
    }
})