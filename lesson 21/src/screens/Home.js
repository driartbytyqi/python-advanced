import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

const Home = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.swiper}
        showsPagination
        dotColor="#999"
        activeDotColor="#007AFF"
      >
        <View style={styles.slide}>
          <Image
            source={require("../../assets/image1.png")}
            style={styles.slideImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/image1.jpg")}
            style={styles.slideImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/image1.jpg")}
            style={styles.slideImage}
            resizeMode="cover"
          />
        </View>
      </Swiper>
      <View style={styles.iconsContainer}>
        <Icon name="cellphone-iphone"  iconText="iphone" />
        <Icon name="android"  iconText="android" />
        <Icon name="laptop"  iconText="laptop" />
      </View>
      <View style={styles.iconsContainer}>
        <Icon name="tablet"  iconText="tablet" />
        <Icon name="mouse"  iconText="mouse" />
        <Icon name="keyboard-outline"  iconText="keyboard" />
      </View>



    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    width:"90%" ,
    alignSelf:"center",
    marginTop:20,
    flexDirection:"row",
    justifyContent:"space-between",
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  swiper: {
    flex: 1,
    width:300,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  slideImage: {
    width: "90%",
    height: "90%",
    borderRadius: 10,
  },
});

export default Home;
