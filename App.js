import React, {useEffect, useRef, useState, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useFonts from './assets/fonts/fonts'
import AppLoading from 'expo-app-loading'
import {Context, PageContext} from './Components/Context/Context';
import Navigation from "./routes/Navigation";

const App = () => {


    const [IsReady, SetIsReady] = useState(false)


    const LoadFonts = async () => {
        await useFonts()
    }
    if (!IsReady) {
        return (
            <AppLoading
                startAsync={LoadFonts}
                onFinish={() => SetIsReady(true)}
                onError={() => {
                }}
            />
        );
    }

    return (
        <Context>
            <Navigation />
        </Context>
    )

}

export default App