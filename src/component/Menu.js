import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Hotel")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQ-uU5KVnYVliqND4XEFFy1Q8KTw19m81uiug7hz8qA5KCeR-YhioTeZ7WTtbJmMg9D0&usqp=CAU",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Donators")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://icon-library.com/images/citizen-icon/citizen-icon-3.jpg",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://media.istockphoto.com/id/950039636/vector/about-us-flat-design-orange-round-vector-icon-in-eps-10.jpg?s=612x612&w=0&k=20&c=3eXs5SjFq4TWTIi7zoWifTn9q4xulmyB53dyuPP4ypg=",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://media.istockphoto.com/id/1225443765/vector/call-contact-us-icon-communication-orange-color.jpg?s=170667a&w=0&k=20&c=6pmIBSCfeNkzcjO80zEQ5N8VTPhspeAxrcDO3Xd_85Q=",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textStyle: {
    textTransform: "uppercase",
  },
  iconStytle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;
