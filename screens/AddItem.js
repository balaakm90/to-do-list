import { StyleSheet, View } from "react-native";
import Button1 from "../components/Button1";
import { useEffect, useState } from "react";
import AddItemModal from "../components/AddItemModal";

export default function AddItem() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addItemHandler() {
    console.log("additem");
    setIsModalVisible(true);
  }

  function closeModalHandler() {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.centeredView}>
      <Button1 onPress={addItemHandler}>Add Item</Button1>
      {isModalVisible && <AddItemModal onClose={closeModalHandler} />}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
  },
});
