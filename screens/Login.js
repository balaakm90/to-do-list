import { StyleSheet, Text, View } from "react-native";

export default function Login() {
  return (
    <>
      <View style={styles.loginContainer}>
        <View style={styles.loginModal}>
          <View style={styles.header}>
            <Text>Login</Text>
          </View>
          <View style={styles.body}></View>
          <View style={styles.footer}></View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginModal: {
    width: "80%",
    height: 250,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 5,
    borderWidth: 1,
  },
  footer: {
    flex: 1,
  },
});
