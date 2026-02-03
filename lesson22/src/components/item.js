import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
}from "react-native";

export default function Item({item}){
    return(
        <View style={styles.cardContainer}>
            <Image
                source={{uri:item.image}}
                style={styles.img}>

                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.category}>{item.category}</Text>
                        <Text style={styles.desc}>{item.description}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>

                </Image>


        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection:"row",
        baxkgroundColor:"#fff",
        borderRadius:8,
        marginBottom:18,
        padding:8,
    },
    img:{
        width:100,
        height:50,
        borderRadius:10,
    },
    textContainer:{
        paddingHorizontal:10,
        flex:1,
    },
    name:{
        fontSize:16,
        fontWeight:"bold",
    },category:{
        color:"#2bbdff",
    },
    desc:{
        fontVerical:5
    },    
    price:{
        backgroundColor:"#2bbdff",
        color:"#fff",
        alightSelf:"flex-start",
        paddingHorizontal:10,
        borderRadius:12
    }

});

