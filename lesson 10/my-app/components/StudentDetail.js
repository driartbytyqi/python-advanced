import React from "react"
import { View, StyleSheet, Text } from "react-native-web"
import Student from "../components/Student"


const StudentDetail=({name})=>{
  
    return(
        <View>
     
            <Text style= {styles.text}>{props.name}</Text>
            <View>
                <Image source={image}></Image>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({


    text:{
        textAlign:'center',
        fontSize :20,
        marginVertical:20
    }


})


export default StudentDetail