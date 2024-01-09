import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home/home';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Home />
      <StatusBar style="dark" />
    </View>
  );
}
