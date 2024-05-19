import { View, Text, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import React, { useContext, useEffect, useState } from "react";
import { UserLocationContext } from "../../Context/UserLocationContext";
import PlaceMarker from "./PlaceMarker";

export default function GoogleMapView({ placeList }) {
  const [mapRegion, setmapRegion] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);
  // console.log("location", location);
  // console.log(location);
  useEffect(() => {
    if (location) {
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          marginTop: 15,
          //   fontWeight: "600",
          fontFamily: "openSansS",
        }}
      >
        Top Near By Places
      </Text>
      <View style={{ marginTop: 20, borderRadius: 20, overflow: "hidden" }}>
        {location ? (
          <MapView
            style={{
              width: Dimensions.get("screen").width * 0.89,
              height: Dimensions.get("screen").height * 0.23,
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
          >
            <Marker coordinate={mapRegion} title="You" />
            {placeList.map(
              (item, index) =>
                index <= 4 && <PlaceMarker item={item} key={index} />
            )}
          </MapView>
        ) : null}
      </View>
    </View>
  );
}
