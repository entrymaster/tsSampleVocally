import React, {useState} from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type SearchBarProps = {
  darkTheme: boolean;
  onFocusHandler: ()=>void;
  onBlurHandler: ()=>void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ darkTheme, onFocusHandler, onBlurHandler }) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <View style={[styles.container, Platform.OS === 'ios' ? styles.shadowIOS: styles.shadowAndroid]}>
      <View
        style={[
          styles.searchBar,
          { backgroundColor: darkTheme ? "#333333" : "#fff" },
        ]}
      >
        <MaterialIcons
          style={{ padding: 5 }}
          name="search"
          size={28}
          color={darkTheme ? '#d3d3d3': '#555555'}
        />
        <TextInput
          style={[
            styles.input,
            { backgroundColor: darkTheme ? "#333333" : "#fff" },
          ]}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
          placeholder="Search here ..."
          placeholderTextColor={darkTheme ? '#d3d3d3': '#555555'}
          autoCapitalize="none"
        />
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "90%",
    left: "5%",
    top: 35,
  },
  shadowIOS: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  shadowAndroid: {
    elevation: 10,
    shadowColor: '#000'
  },
  input: {
    fontSize: 15,
    color: "#8c8c8c",
    fontWeight: "600",
    width: "85%",
    paddingLeft: 5,
  },
  searchBar: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 12,
  },
});
