import React from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";

const students = [
  { name: "Eden", surname: "Rocha", age: "17" },
  { name: "Kaylen", surname: "Tyler", age: "15" },
  { name: "Ellie", surname: "Mcclure", age: "17" },
  { name: "Journey", surname: "Blackburn", age: "16" },
];

let nam="driart",

count=0



const ListScreen = () => {
  return (
    <View>
      <Button
      text="click me "
      color="blue"
      onPress={()=>console.log("butoni eshte klikuar")}>  
      </Button>



      <TouchableOpacity 
      style={styles.touchableBtn}
      onPress={()=>console.log("butomi eshte klikuar nga touchable opacity",count++)}

      >

        <Text style={styles.btnText}>click here</Text>
      </TouchableOpacity>

      <Text style={styles.textStyle}>List of Students</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text style={styles.textStyle}>
            {item.name} {item.surname} — Age {item.age}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    marginVertical: 5,
  },
  btnText:{
    color:"white",
    textAlign:"center",
    fontSize:25,
    fontWeight:"bold"
  },
  touchableBtn:{
    backgroundColorL:"purple",
    marginVertical:15,
    paddingVertical:20,
    borderRadius:6,
    marginHorizontal:20
  }

});

export default ListScreen;
