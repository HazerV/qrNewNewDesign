import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useFonts from './assets/fonts/fonts'
import AppLoading from 'expo-app-loading'
import { Context } from './Components/Context/Context';
import Home from './Components/Pages/Home/Home'
import Menu from '../qrNewNew/Components/Pages/Menu/Menu'
import ChangeCort from '../qrNewNew/Components/Pages/ChangeCort/ChangeCort.jsx'

const Stack = createNativeStackNavigator()

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
        onError={() => {}}
      />
    );
  }

  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name='Home'
            component={Home}
            options = {{
              headerShown: false
            }}
            />
        <Stack.Screen
            name='Menu'
            component={Menu}
            options = {{
              headerShown: false
            }}
            />
          <Stack.Screen
          name='ChangeCort'
          component={ChangeCort}
          options = {{
            headerShown: false
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  )

}

export default App