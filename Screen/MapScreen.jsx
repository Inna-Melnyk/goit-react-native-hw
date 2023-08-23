import { React, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export const MapScreen = ({ route }) => {
  const location = route.params.location;

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          region={{
            ...location,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
          minZoomLevel={13}
          //   onMapReady={() => console.log("Map is ready")}
          //   onRegionChange={() => console.log("Region change")}
        >
          <Marker title="I am here" coordinate={location} description="Hello" />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },

  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // width: 200,
    // height: 200,
    position: "absolute",
  },
});
