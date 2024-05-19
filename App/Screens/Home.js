import { ScrollView, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";
import PlaceList from "../Components/Home/PlaceList";
import { UserLocationContext } from "../Context/UserLocationContext";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);
  // console.log(location);
  // console.log(location);
  // console.log("location", location);
  // console.log("location", location);

  // useEffect(() => {
  //   getNearBySearchPlace("restaurant");
  // }, []);
  useEffect(() => {
    if (location) {
      getNearBySearchPlace("restaurant");
    }
  }, [location]);

  const getNearBySearchPlace = (value) => {
    // console.log(location);
    console.log("goal");
    console.log(location.coords.latitude, location.coords.longitude);
    console.log(location);
    GlobalApi.nearByPlace(
      location.coords.latitude,
      location.coords.longitude,
      value
    )
      .then((resp) => {
        setPlaceList(resp.data.results);
      })
      .catch((error) => {
        console.error("Error fetching nearby places:", error);
      });
  };
  return (
    <ScrollView
      style={{
        paddingLeft: 20,

        backgroundColor: "#fff",
        flex: 1,
      }}
      // onContentSizeChange={}
    >
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList
        setSelectedCategory={(value) => getNearBySearchPlace(value)}
      />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
}
