import react from "react";
import { View, StyleSheet, Text } from "react-native"





const BoxScreen =()=>{
    return(
      
        <View style={styles.container}>
            <Text style={styles.title}> flex direction: "row" </Text>

            <View style={styles.boxArea}>
                <View style={[styles.box, {backgroundColor:"red"}]}>1</View>
                <View style={[styles.box, {backgroundColor:"green"}]}>2</View>
                <View style={[styles.box, {backgroundColor:"blue"}]}>3</View>
            </View>




        </View>
    )
        
};
const styles =StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        alingnItems:"center",
        backgroundColor:"#fff",
        },


        title: {
          fontSize:20,
          marginBottom:12,
        },

        boxArea:{
            width:"95%",

            
            backgroundColor:"#eaf4fb",
            justifyContent:"center",
            paddingHorizontal:10,
            flexDirection:"row",
            alignItems:"center",
        },


    
})



export  default BoxScreen