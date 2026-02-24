import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Bird from "./src/components/flappy-bird";
import Obstacles from "./src/components/obstacles";
import { useEffect, useState } from 'react';

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);

 
  const gravity = 3;
  let gameTimerId;

  const Obstacleswidth = 60;
  const Obstaclesheight = 300;


  const gap = 200;

  const [ObstaclesLeft , setObstaclesLeft] = useState(screenWidth);
  const [ObstaclesNegheight, setObstaclesNegheight] = useState(0);
  let ObstaclesTimerId;



  const [ObstaclesLeftTwo , setObstaclesLeftTwo] = useState(
    screenWidth + screenWidth / 2);

    const [ObstaclesNegheightTwo, setObstaclesNegheightTwo] = useState(0);
    let ObstaclesTimerIdTwo;

    useEffect(() => {
      if (ObstaclesLeft > -Obstacleswidth) {
        ObstaclesTimerId = setInterval(() => {
          setObstaclesLeft((left) => left - 5);
        },30);
      } else {
        setObstaclesLeft(screenWidth);
        setObstaclesNegheight(-Math.random() * 100);
      }
      return () => clearInterval(ObstaclesTimerId);
    },[ObstaclesLeft]);
    
    useEffect(() => {
      if (ObstaclesLeftTwo > -Obstacleswidth) {
        ObstaclesTimerIdTwo = setInterval(() => {
          setObstaclesLeftTwo((left) => left - 5);
        },30);
      } else {
        setObstaclesLeftTwo(screenWidth);
        setObstaclesNegheightTwo(-Math.random() * 100);
      }
      return () => clearInterval(ObstaclesTimerIdTwo);
    },[ObstaclesLeftTwo]);



  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity);
        }, 30);
    }
    return () => {
      clearInterval(gameTimerId);
    }
  }, [birdBottom]);

  return (
    <View style={styles.container}>
      <Bird
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
      <Obstacles
        color={"green"}
        Obstacleswidth={Obstacleswidth}
        Obstaclesheight={Obstaclesheight}
        gap={gap}
        rondombottom={ObstaclesNegheight}
        ObstaclesLeft={ObstaclesLeft}
      />
      <Obstacles
        color={"yellow"}
        Obstacleswidth={Obstacleswidth}
        Obstaclesheight={Obstaclesheight}
        gap={gap}
        rondombottom={ObstaclesNegheightTwo}
        ObstaclesLeft={ObstaclesLeftTwo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
