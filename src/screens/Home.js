import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import Menu from "../component/Menu";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const Home = (props) => {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const carouselImages = [
    require("../../assets/moto1.png"),
    require("../../assets/moto.png"),
    require("../../assets/moto1.png"),
    require("../../assets/moto.png"),
    require("../../assets/logo.png"),
    require("../../assets/moto1.png"),
    require("../../assets/moto.png"),
    require("../../assets/moto1.png"),
    require("../../assets/moto.png"),
    require("../../assets/logo.png"),
    require("../../assets/moto1.png"),
    require("../../assets/moto.png"),
    require("../../assets/moto1.png"),
    require("../../assets/moto.png"),
    require("../../assets/logo.png"),
    require("../../assets/moto1.png"),
    require("../../assets/moto.png"),
    require("../../assets/moto1.png"),
    require("../../assets/moto.png"),
    require("../../assets/logo.png"),
  ];

  const description =
    "We transform excess into impact through our innovative distribution network. Join us in our mission to end food waste and hunger by rescuing surplus food from hotels and making a difference.";

    const renderCarouselItem = ({ item }) => {
      return (
        <View style={styles.carouselItem}>
          <Image style={styles.carouselImage} source={item} />
        </View>
      );
    };

  return (
    <View style={styles.container}>
      <Carousel
        data={carouselImages}
        renderItem={renderCarouselItem}
        sliderWidth={850}
        itemWidth={680}
      />

      <Text style={styles.title}>Welcome to Plate2Purpose</Text>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.divider}></View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        textAlign: "center",
      },

  title: {
    fontSize: 28,
    color: "#4c5dab",
    fontFamily: "Nunito_700Bold",
    marginTop: 30,
    textAlign: "center",
  },

  description: {
    fontSize: 16,
    color: "#7d7d7d",
    fontFamily: "WorkSans_400Regular",
    textAlign: "center",
    marginTop: 20,
    lineHeight: 22,
  },

  divider: {
    height: 1,
    backgroundColor: "#A9A9A9",
    marginVertical: 20,
  },

  carouselItem: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop:100
  },

  carouselImage: {
    width: 350,
    height: 260,
    borderRadius: 90,
  },
});

export default Home;


