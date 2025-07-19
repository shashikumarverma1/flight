import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

export const CustomDropDown = ({ data, selectedItem, onSelect , lable}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleItemSelect = (item) => {
    onSelect?.(item.title);
    setShowDropdown(false); // hide dropdown after selection
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
        <Text style={styles.selectedText}>
          {selectedItem ? selectedItem : lable}
        </Text>
      </TouchableOpacity>

      {showDropdown && (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => handleItemSelect(item)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
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
   
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
