import react from 'react';
import {Text} from 'react-native-web';
import StudentInfo from '../components/StudentInfo';

function ProfileScreen() {
  return( 
  <View>
        <StudentInfo
        fullName={"donjeta"}
        position={"developer"}
        desc={"i am a developer"}
        profileImage={require("../assets/profile.jpg")}
        ></StudentInfo>
    </View>
    );
}