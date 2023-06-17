import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

