import routes from "../routes";
import React, {useContext, useRef} from "react";
import {
    NavigationContainer,
    useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {PageContext} from "./Context/Context";



const Stack = createNativeStackNavigator()

const Navigation = () => {
    const {route, setRoute} = useContext(PageContext)


    const navigationRef = useNavigationContainerRef();
    // const routeNameRef = useRef();


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
                    // Save the current route name for later comparison
                    setRoute(currentRouteName);
                }
            }}
        >
            <Stack.Navigator>
                {
                    Object.keys(routes).map((name)=>
                        (
                            <Stack.Screen
                                name={name}
                                component={routes[name]}
                                options={{
                                    headerShown: false
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