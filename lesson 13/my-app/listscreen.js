import React from "react";
import { View,Text, FlatList } from "react-native-web";
import { StyleSheet, Button } from "react-native";

const  studentat = [
    {name : "driart",surname:"bytyqi",age:"15",},
    {name : "driart",surname:"bytyqi",age:"15",},
    {name : "driart",surname:"bytyqi",age:"15",},
    
]

const  Listscreen = () => {
    return(
        <View>

            <Button title="go to main screen" onPress={()=>navigator.navigator(" main")}></Button>
        <Text style={style.textStyle}>lista e studentve</Text>

        <FlatList 
        data={studentat}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <View>
            <Text style={style.textStyle}>
                Emri: {item.name}  Mbiemri: {item.surname}  Mosha: {item.age}
            </Text>
            </View>
        )}
        />
        </View>


    )
}

 const style = StyleSheet .create(
    {
        textStyle:{
        fontsize: 18,
        marginVertical:5,
    }
}
 )

 export default Listscreen;