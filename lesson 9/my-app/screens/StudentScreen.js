import React from 'react';
import { View } from 'react-native';
import StudentDetail from '../components/StudentDetail';

const StudentScreen = ({}) => {
    return (
        <View>
            <Text style={StyleSheet.text}>student screen</Text>
             <StudentDetail name ="donjeta"
             image={"../assets/person1.jpg"}
             ></StudentDetail>
             <StudentDetail name ="driart"
             image={"../assets/person1.jpg"}
             ></StudentDetail>
             <StudentDetail name ="eglandin"
             image={"../assets/person1.jpg"}
             ></StudentDetail>
        </View>
    )
}
 export default StudentScreen;