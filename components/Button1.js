import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button1(props) {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>{props.children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#8987EE",
    borderRadius: 10,
    width: 200,
    padding: 5,
    backgroundColor: "#8987EE",
  },
  headingText: {
    fontSize: 30,
    color: "#2E2AEB",
    fontSize: 25,
  },
});
