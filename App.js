import React, {useState} from 'react';
import useFonts from './assets/fonts/fonts'
import AppLoading from 'expo-app-loading'
import Navigation from "./routes/Navigation";
import 'react-native-gesture-handler'
import {Context} from "./src/Components/Context/Context";

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