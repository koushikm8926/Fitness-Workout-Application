import { Platform, SafeAreaView, StyleSheet, Text, View,Image , ScrollView} from 'react-native'
import React from 'react'
import FitnessCards from '../components/FitnessCards'

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

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                    style={{ width: "90%", height: 120, marginTop: 20, borderRadius: 7 }}
                    source={{
                    uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
                    }}
                />
            </View>
                    <FitnessCards/>
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