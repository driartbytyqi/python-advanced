import React from "react";
import { View,Text, FlatList } from "react-native-web";

const  studentat = [
    {name : "driart",surname:"bytyqi",age:"15",},
    {name : "driart",surname:"bytyqi",age:"15",},
    {name : "driart",surname:"bytyqi",age:"15",},
    
]

const  Listscreen = () => {
    return(
        <View>
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