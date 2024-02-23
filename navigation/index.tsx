import React from "react";
import {
    NavigationContainer,
} from "@react-navigation/native";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import LoginScreen from "../screens/Authentication/Login";
import HomeScreen from "../screens/Home";
import SplashScreen from "../screens/Splash";

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="splash"
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen
                name="splash"
                component={SplashScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
};

export default Navigation;
