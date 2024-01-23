import React, {useState, useEffect} from 'react';
import useFonts from './assets/fonts/fonts'
import AppLoading from 'expo-app-loading'
import Navigation from "./routes/Navigation";
import 'react-native-gesture-handler'
import {Context} from "./src/Components/Context/Context";
import ApiService from './src/Components/ApiService/ApiService'
import axios from "axios";
// import {storageLoad} from "./src/Storage/Storage";


const App = () => {

    // storageLoad()
    const [IsReady, SetIsReady] = useState(false)
    const Load = async () => {
        await useFonts()
    }
    if (!IsReady) {
        return (
            <AppLoading
                startAsync={Load}
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