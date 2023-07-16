import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

import Hotels from "../api/HotelsAPI";

const Hotel = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const hotelCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.hotelContainer}>
          <Image style={styles.cardImage} source={item.image} resizeMode="contain" />

          <Text style={styles.mainHeader}>{item.title}</Text>

          <Text style={styles.description}>{item.description}</Text>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              navigation.navigate("HotelDetails", {
                hotelId: item.id,
              })
            }
          >
            <Text style={styles.buttonText}>Hotel Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Hotels}
      renderItem={hotelCard}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  mainContainer: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  hotelContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: 150,
    marginBottom: 12,
    borderRadius: 8,
  },
  mainHeader: {
    fontFamily: "Nunito_700Bold",
    fontSize: 18,
    color: "#333333",
    marginBottom: 8,
  },
  description: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 14,
    color: "#666666",
    marginBottom: 12,
  },
  buttonStyle: {
    backgroundColor: "#007AFF",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontFamily: "WorkSans_400Regular",
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default Hotel;
