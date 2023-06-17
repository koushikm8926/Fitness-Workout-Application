import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaView, ScrollView } from 'react-native';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
   <StackNavigator/>
  );
}

