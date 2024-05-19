import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
} from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

export default function Header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        alignItems: "center",
        marginTop: 25,
      }}
    >
      <Image
        source={require("./../../../assets/logo.png")}
        style={styles.logo}
      />
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: Colors.DARK_GRAY,
          }}
        >
          Explore Place App
        </Text>
      </View>
      {/* <Image
        source={require("./../../../assets/user.png")}
        style={styles.userImage}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.BLACK,
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    width: Dimensions.get("screen").width * 0.6,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
