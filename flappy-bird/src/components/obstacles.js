import react from "react";
import {View} from "react-native";

const Obstacles =(
    {
        color,
        Obstacleswidth,
        Obstaclesheight,
        rondombottom,
        gap,
        ObstaclesLeft,
    }
)=>{
    return(
        <>
            <View 
            style={{
                position:"absolute",
                backgroundColor:color,
                width:Obstacleswidth,
                height:500,
                left:ObstaclesLeft,
                bottom:rondombottom+Obstaclesheight+gap,
            }}
            >


            </View>

             <View 
            style={{
                position:"absolute",
                backgroundColor:color,
                width:Obstacleswidth,
                height:Obstaclesheight,
                left:ObstaclesLeft,
                bottom:rondombottom,
            }}
            ></View>

        </>
    )
};
export default Obstacles;
