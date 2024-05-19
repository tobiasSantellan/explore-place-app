import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import PlaceItemBig from "./PlaceItemBig";
import { useNavigation } from "@react-navigation/native";

export default function PlaceList({ placeList }) {
  // prop proveniente de padre Home.js
  const Navigator = useNavigation();
  const onPressClick = (item) => {
    Navigator.navigate("place-detail", { place: item });
  };
  return (
    <View>
      <Text style={{ fontSize: 20, fontFamily: "OpensSansR", marginTop: 10 }}>
        Found {placeList.length} places
      </Text>
      <FlatList
        data={placeList}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onPressClick(item)}>
            {index % 4 == 0 ? (
              <PlaceItemBig place={item} />
            ) : (
              <PlaceItem place={item} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
