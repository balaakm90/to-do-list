import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import AddItem from "./screens/AddItem";

export default function App() {
  return (
    <View style={styles.container}>
      <AddItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
