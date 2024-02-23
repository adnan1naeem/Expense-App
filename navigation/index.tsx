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

// Create a stack navigator
const Stack = createStackNavigator();

// Root navigator containing your app screens
const RootNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="splash"
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS, // Apply slide-from-right transition
            }}
        >
            {/* Splash Screen */}
            <Stack.Screen
                name="splash"
                component={SplashScreen}
                options={{
                    headerShown: false, // Hide the header for the splash screen
                }}
            />

            {/* Login Screen */}
            <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{
                    headerShown: false, // Hide the header for the login screen
                }}
            />

            {/* Home Screen */}
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                    headerShown: false, // Hide the header for the home screen
                }}
            />
        </Stack.Navigator>
    );
};

// The main navigation component wrapping the RootNavigator
const Navigation = () => {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
};

export default Navigation;
