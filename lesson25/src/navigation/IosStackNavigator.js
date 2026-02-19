import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ios from "../screens/Ios";


const Stack = createStackNavigator();

const IosStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Ios"
             component={Ios}
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

export default IosStackNavigator;