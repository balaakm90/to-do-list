import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', title: 'Apples' },
  { id: '2', title: 'Bananas' },
  { id: '3', title: 'Cherries' },
  { id: '4', title: 'Dates' },
  { id: '5', title: 'Elderberries' },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ItemListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
  },
});

export default ItemListScreen;
