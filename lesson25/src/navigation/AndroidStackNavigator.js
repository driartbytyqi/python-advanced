import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Android from "../screens/Android";


const Stack = createStackNavigator();

const AndroidStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Android"
             component={Android}
                options={
                    {
                    headerStyle: {
                        backgroundColor: "#FF6347",
                    },
                    headerTintColor: "white",
                
                }
            }
                >

                </Stack.Screen>
                </Stack.Navigator>
                
    )
}

export default AndroidStackNavigator;
