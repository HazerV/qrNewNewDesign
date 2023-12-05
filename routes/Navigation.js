import routes from "./index";
import React, {useContext} from "react";
import {
    NavigationContainer,
    useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {PageContext, ThemeContext} from "../Components/Context/Context";
import {Platform, StatusBar} from "react-native";

const Stack = createNativeStackNavigator()
const Navigation = () => {
    const {route, setRoute} = useContext(PageContext)
    const navigationRef = useNavigationContainerRef();
    const {theme} = useContext(ThemeContext)

    let color = 'white'


    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                setRoute(navigationRef.getCurrentRoute().name);
            }}
            onStateChange={async () => {
                const previousRouteName = route;
                const currentRouteName = navigationRef.getCurrentRoute().name;
                if (previousRouteName !== currentRouteName) {
                    setRoute(currentRouteName);
                }
            }}
        >
            <Stack.Navigator
            screenOptions={{headerShown: false}}>
                {
                    Object.keys(routes).map((name)=>
                        (
                            <Stack.Screen
                                name={name}
                                component={routes[name]}
                                options={{
                                    animation: 'none',
                                    statusBarStyle: theme === 'light' ? 'dark' : 'white',
                                    statusBarTranslucent: true,
                                    statusBarColor: 'transparent',
                                    navigationBarHidden: true,
                                    headerShown: false,
                                }}
                            />
                        )
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default  Navigation