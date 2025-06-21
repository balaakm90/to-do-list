import { useState } from "react";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function ScreenControl() {
    const Stack = createNativeStackNavigator();

    const [showLogin, setShowLogin] = useState(true);
    function handleLoginSuccess() {
        setShowLogin(false);
    }
    function handleHomeBack() {
        Alert.alert('Logout', 'Logged out successfully.');
        setShowLogin(true);
    }
    return (
        <>
            {/* {showLogin ? <LoginScreen onSuccess={handleLoginSuccess} /> : <HomeScreen onBack={handleHomeBack} />} */}
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ title: 'Welcome' }}
                    />
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}