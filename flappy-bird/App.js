import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, Dimensions, TouchableWithoutFeedback,Text } from 'react-native';
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

    const [isGameOver, setIsGameOver] = useState(false);
    const [score, setScore] = useState(0);

    const gameOver=() => {
      setIsGameOver(true);
      clearInterval(gameTimerId);
      clearInterval(ObstaclesTimerId);
      clearInterval(ObstaclesTimerIdTwo);
    }

    const jump = () => {
      if(!isGameOver && birdBottom < screenHeight){
        setBirdBottom((b) => b + 50);
      }

    }

    useEffect(() => {
      if (ObstaclesLeft > -Obstacleswidth) {
        ObstaclesTimerId = setInterval(() => {
          setObstaclesLeft((left) => left - 5);
        },30);
      } else {
        setScore((s) => s + 1);
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
        setScore((s) => s + 1);
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

  useEffect(() =>{
    if (
      (
      birdBottom < Obstaclesheight + ObstaclesNegheight +30 ||
      birdBottom > Obstaclesheight + ObstaclesNegheight + gap - 30
      && 
      ObstaclesLeft > screenWidth / 2 - 30 &&
      ObstaclesLeft < screenWidth / 2 + 30
      ) ||(
          (
      birdBottom < ObstaclesNegheight + ObstaclesNegheightTwo +30 ||
      birdBottom > ObstaclesNegheight + ObstaclesNegheightTwo + gap - 30
      && 
      ObstaclesLeftTwo > screenWidth / 2 - 30 &&
      ObstaclesLeftTwo < screenWidth / 2 + 30
      )
      )
      ){

        gameOver();
      }
    },[
      birdBottom,
       ObstaclesLeft,
        ObstaclesNegheight,
         ObstaclesLeftTwo,
          ObstaclesNegheightTwo,
        isGameOver,]);
    

  return (
    <TouchableWithoutFeedback onPress={jump}>
    <View style={styles.container}>
      <Text style={styles.score}>{score}

      </Text>
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

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    position: "absolute",
    top: 60,
    fontSize: 24,
    fontWeight: "bold",
    zIndex: 10,
  }
});
 