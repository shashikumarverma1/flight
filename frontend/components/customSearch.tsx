import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

export const CustomDropDown = ({ data, selectedItem, onSelect, lable }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleItemSelect = (item) => {
    onSelect?.(item);
    setShowDropdown(false);
  };

  console.log(selectedItem?.presentation?.title, 'selectedItem');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
        <Text style={styles.selectedText}>
          {selectedItem?.presentation?.title || lable}
        </Text>
      </TouchableOpacity>

      {showDropdown && (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => handleItemSelect(item)}>
              <Text>{item?.presentation?.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  selectedText: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
