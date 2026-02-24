import react from "react";
import { View } from "react-native";


const FlappyBird = ({ birdBottom, birdLeft }) => {
    return (
        <View
            style={{
                position: "absolute",
                width: 50,
                height: 50,
                backgroundColor: "blue",
                left: birdLeft,
                bottom: birdBottom
            }}>
        </View>
    )
}
export default FlappyBird;