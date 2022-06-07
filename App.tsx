import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text
} from "react-native";
import Constants from "expo-constants";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { BottomTab } from "./Components/BottomTab";
import { RoundButton } from "./Components/RoundButton";
import { SearchBar } from "./Components/SearchBar";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Banner } from "./Components/Banner";
import {mapStyleDark, markers, searchResult} from "./Components/data"

export default function App() {
  const [region, setRegion] = useState({
    latitude: 26.843038624798467,
    latitudeDelta: 0.0732756619287187,
    longitude: 80.94415543600917,
    longitudeDelta: 0.04971709102392197,
  });
  const [darkTheme, setDarkTheme] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          showsTraffic={true}
          rotateEnabled={false}
          mapType="standard"
          customMapStyle={darkTheme ? mapStyleDark : []}
          onRegionChangeComplete={(region) => setRegion(region)}
          initialRegion={region}
        >
          {markers.map((item, index) => (
            <Marker
              key={index}
              title={item.label}
              description={item.description}
              coordinate={item.latlng}
              image={item.icon}
            />
          ))}
        </MapView>
      </TouchableWithoutFeedback>

      <SearchBar darkTheme={darkTheme} onFocusHandler={()=>setSearchActive(true)} onBlurHandler={()=>setSearchActive(false)} />

      {searchActive ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.searchResult, { backgroundColor: darkTheme ? "#333333" : "#fff" },]}>
          {
            searchResult.map((item, index)=>(
              <Text key={index} style={[styles.searchText, {color: darkTheme? '#d3d3d3': '#444444'}]}>{item}</Text>
            ))
          }
        </View>
        </TouchableWithoutFeedback>
      ) : (
        <>
          <View style={styles.toggleButton}>
            <RoundButton
              darkTheme={darkTheme}
              onPressHandler={() => setDarkTheme(!darkTheme)}
            >
              <Ionicons
                name="options"
                size={28}
                color={darkTheme ? "white" : "black"}
              />
            </RoundButton>
          </View>
          <View style={styles.arrowButton}>
            <RoundButton darkTheme={darkTheme} onPressHandler={() => {}}>
              <FontAwesome
                name="location-arrow"
                size={28}
                color={darkTheme ? "white" : "black"}
              />
            </RoundButton>
          </View>

          <Banner darkTheme={darkTheme} />

          <BottomTab darkTheme={darkTheme} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  toggleButton: {
    position: "absolute",
    left: Dimensions.get("window").width - 65,
    top: 100,
  },
  arrowButton: {
    position: "absolute",
    left: Dimensions.get("window").width - 65,
    top: 160,
  },
  searchResult:{
    position:'absolute',
    backgroundColor:'#fff',
    height:Dimensions.get("window").height - 100,
    width:'90%',
    top:100,
    borderRadius:10,
    padding:15
  },
  searchText:{
    fontSize:16,
    borderBottomWidth:0.6,
    borderBottomColor:'grey',
    paddingVertical:10,
  }
    
});
