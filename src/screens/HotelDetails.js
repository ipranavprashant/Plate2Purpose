import { StyleSheet, Text, View, Image, TouchableOpacity ,ScrollView} from "react-native";
import React from "react";
import Hotels from "../api/HotelsAPI";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const HotelDetails = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  const id = route.params.hotelId;
  console.log(id);

  const selectedHotel = Hotels.find((element) => {
    return id === element.id;
  });

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.hotelContainer}>
        <View>
          <Image
            style={styles.cardImage}
            source={selectedHotel.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.mainHeader}>{selectedHotel.title}</Text>

        <Text style={styles.description}>{selectedHotel.description}</Text>

        <Text style={[styles.description, styles.subHotel]}>
          {selectedHotel.food1}
        </Text>

        <Text style={[styles.description, styles.subHotel]}>
          {selectedHotel.food2}
        </Text>

        <Text style={[styles.description, styles.subHotel]}>
          {selectedHotel.food3}
        </Text>

        <View style={styles.buttonContainer}>
          <Text style={styles.price}> {selectedHotel.price} </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Hotel")}>
            <Text style={styles.buttonText}> Visit us :) </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
  );
};

// !todo style the hotel1 and make it uppercase

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "red",
    paddingHorizontal: 20,
  },
  hotelContainer: {
    // height: "50%",
    // display: "flex",
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },

  cardImage: {
    width: "100%",
    display: "flex",
    alignSelf: "center",
    height: undefined,
    aspectRatio: 1,
  },

  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    paddingTop: 10,
    paddingBottom: 15,
    fontFamily: "Nunito_700Bold",
    textAlign: "center",
  },

  subHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    paddingBottom: 15,
    fontFamily: "WorkSans_400Regular",
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 20,
  },
  subHotel: {
    textTransform: "uppercase",
    color: "#344055",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  price: {
    backgroundColor: "#344055",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 1,
    borderTopLeftRadius: 1,
    fontSize: 20,
    fontFamily: "WorkSans_400Regular",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "WorkSans_400Regular",
  },
});

export default HotelDetails;
