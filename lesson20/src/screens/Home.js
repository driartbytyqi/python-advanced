import React from "react";
import { View, Text, StyleSheet, TouchableOpacity ,Button,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Swiper
        style={{}}
        showsPagination
        dotColor="#999"
        activeDotColor="#007AFF"
      >
        <View style={styles.slide}>
          <Image 
            source={require('../assets/photo.png')}
            style={styles.slideImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image 
            source={require('../assets/splash-icon.png')}
            style={styles.slideImage}
            resizeMode="cover"
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  swiper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slideImage: {
    width: "90%",
    height: "90%",
    borderRadius: 10,
  },
});

export default Home;
