import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";

export default function AddItemModal(props) {
  const [text, setText] = useState("");

  function resetHandler() {
    console.log("reset");
    setText("");
  }

  function addHandler() {
    console.log("add");
    props.onClose();
  }

  function onChangeTextHandler(enteredText) {
    setText(enteredText);
  }

  function closeHandler() {
    console.log("close");
    props.onClose();
  }

  return (
    <View style={styles.centeredView}>
      <Modal transparent={false} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <View style={styles.headerLeft}></View>
              <View style={styles.headerRight}>
                <Text onPress={closeHandler} style={styles.closeIcon}>
                  X
                </Text>
              </View>
            </View>
            <View style={styles.modalBody}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeTextHandler}
                value={text}
                placeholder="Add Item Here..."
              />
            </View>
            <View style={styles.modalButtonContainer}>
              <View style={styles.button}>
                <Button onPress={resetHandler} title="Reset"></Button>
              </View>
              <View style={styles.button}>
                <Button onPress={addHandler} title="Add"></Button>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#E8E8F7",
    borderWidth: 1,
    borderColor: "#C2C1F9",
    borderRadius: 20,
    shadowColor: "#000",
    width: "90%",
    height: 200,
    flexDirection: "column",
    alignItems: "stretch",
  },
  modalHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerLeft: {
    flex: 5,
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
  },
  modalBody: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
  },
  modalButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    width: "95%",
    padding: 10,
  },
  button: {
    flex: 1,
    padding: 10,
  },
  closeIcon: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
