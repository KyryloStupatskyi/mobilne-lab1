import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import login from "@/Screens/Login";
import LoggedIn from "@/Screens/LoggedIn";

const LoginScreen = login;
const LoggedInScreen = LoggedIn;

const Stack = createNativeStackNavigator();

export default function Index() {
    return (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Login"
                          component={LoginScreen}
                          options={({navigation}) => ({
                              headerShown: false
                          })
                          }/>
            <Stack.Screen  name ="LoggedIn"
                           component={LoggedInScreen}/>
        </Stack.Navigator>
    );
}
