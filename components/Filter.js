import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const data = [
  { label: "Date", value: "1" },
  { label: "Last Modified", value: "2" },
  { label: "Last Opened", value: "3" },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  const handleClearSelection = () => {
    setValue(null);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={250}
        labelField="label"
        valueField="value"
        placeholder="Sort by"
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
        containerStyle={styles.dropdownItem}
        itemContainerStyle={styles.dropdownItemContainer}
        itemTextStyle={styles.dropdownItemText}
        renderRightIcon={() =>
          value ? (
            <Entypo
              name="cross"
              size={22}
              color="#323337"
              style={styles.clearIcon}
              onPress={handleClearSelection}
            />
          ) : (
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="black"
              style={styles.dropdownIcon}
            />
          )
        }
        // renderRightIconStyle={styles.iconStyle}
        // renderRightIconContainerStyle={styles.iconContainer}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  dropdown: {
    marginVertical: 10,
    height: 50,
    backgroundColor: "#F1F3F4",
    borderRadius: 15,
    width: 120,
    marginRight: 10
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 12,
    marginLeft: 10,
  },
  selectedTextStyle: {
    fontSize: 12,
    marginLeft: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  iconContainer: {
    paddingHorizontal: 5,
  },
  dropdownItem: {
    backgroundColor: "#F1F3F4",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 15,
    marginLeft: 1,
  },
  dropdownItemContainer: {
    margin: 0,
    padding: 0,
  },
  dropdownItemText: {
    fontSize: 12,
    color: "#333",
  },
  clearIcon: {
    marginRight: 5,
  },
  dropdownIcon: {
    marginRight: 5,
  },
});
