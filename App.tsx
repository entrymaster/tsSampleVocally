import React, { useState } from "react";
import { StyleSheet, Dimensions, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { BottomTab } from "./Components/BottomTab";
import { RoundButton } from "./Components/RoundButton";
import { SearchBar } from "./Components/SearchBar";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [region, setRegion] = useState({
    latitude: 26.843038624798467,
    latitudeDelta: 0.0732756619287187,
    longitude: 80.94415543600917,
    longitudeDelta: 0.04971709102392197,
  });
  const [darkTheme, setDarkTheme] = useState(false);

  const mapStyleDark = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8ec3b9",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1a3646",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#64779e",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#334e87",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6f9ba5",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3C7680",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#304a7d",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#2c6675",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#255763",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#b0d5ce",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#3a4762",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#0e1626",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#4e6d70",
        },
      ],
    },
  ];

  const markers = [
    {
      label: "Player 1",
      description: "This is the description of the player.",
      icon: require("./assets/burger.png"),
      latlng: {
        latitude: 26.851102,
        longitude: 80.959511,
      },
    },
    {
      label: "Player 2",
      description: "This is the description of the player.",
      icon: require("./assets/pizza.png"),
      latlng: {
        latitude: 26.868968,
        longitude: 80.932841,
      },
    },
    {
      label: "Player 3",
      description: "This is the description of the player.",
      icon: require("./assets/burger.png"),
      latlng: {
        latitude: 26.828775,
        longitude: 80.929595,
      },
    },
    {
      label: "Player 4",
      description: "This is the description of the player.",
      icon: require("./assets/pharma.png"),
      latlng: {
        latitude: 26.809483,
        longitude: 80.954941,
      },
    },
    {
      label: "Player 5",
      description: "This is the description of the player.",
      icon: require("./assets/beer.png"),
      latlng: {
        latitude: 26.842928,
        longitude: 80.931276,
      },
    },
    {
      label: "Player6",
      description: "This is the description of the player.",
      icon: require("./assets/tea.png"),
      latlng: {
        latitude: 26.831098,
        longitude: 80.9431,
      },
    },
    {
      label: "Player 7",
      description: "This is the description of the player.",
      icon: require("./assets/coffee.png"),
      latlng: {
        latitude: 26.86327,
        longitude: 80.95034,
      },
    },
  ];

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
      <View
        style={{
          position: "absolute",
          top: 25,
          width: "100%",
        }}
      >
        <SearchBar darkTheme={darkTheme} />
      </View>
      <View style={styles.toggleButton}>
        <RoundButton darkTheme={darkTheme} onPressHandler={() => setDarkTheme(!darkTheme)} >
        <Ionicons name="options" size={28} color={darkTheme? "white":"black"} />
        </RoundButton>
      </View>
      <View style={styles.arrowButton}>
        <RoundButton darkTheme={darkTheme} onPressHandler={() => {}} >
        <FontAwesome name="location-arrow" size={28} color={darkTheme? "white":"black"} />
        </RoundButton>
      </View>

      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <BottomTab darkTheme={darkTheme} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  toggleButton:{
      position: "absolute",
      left: Dimensions.get("window").width - 65,
      top: 100
  },
  arrowButton:{
    position: "absolute",
      left: Dimensions.get("window").width - 65,
      top: 160
  }
});
