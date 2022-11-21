import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/Components/Screens/LoginScreen'
import { Provider as PaperProvider } from 'react-native-paper';
import axios from "axios";
    

export default function App() {
  return (
  <PaperProvider>
      <View style={styles.container}>
        <LoginScreen></LoginScreen>
      </View>
  </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
