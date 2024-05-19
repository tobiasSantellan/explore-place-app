import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ setSelectedCategory }) {
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("./../../../assets/gass.png"),
    },
    {
      id: 2,
      name: "Restaurants",
      value: "restaurant",
      icon: require("./../../../assets/restaurant.png"),
    },
    {
      id: 3,
      name: "Cafe",
      value: "cafe",
      icon: require("./../../../assets/caffe.png"),
    },
    {
      id: 4,
      name: "Gym",
      value: "gym",
      icon: require("./../../../assets/gym.png"),
    },
    {
      id: 5,
      name: "Supermarket",
      value: "supermarket",
      icon: require("./../../../assets/supermarket.png"),
    },
    {
      id: 6,
      name: "Hospital",
      value: "hospital",
      icon: require("./../../../assets/hospital.png"),
    },
  ];
  return (
    <View style={{ marginTop: 15 }}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "OpenSansS",
          fontWeight: "600",
        }}
      >
        Select Top Category
      </Text>
      <FlatList
        data={categoryList}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item.value)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
