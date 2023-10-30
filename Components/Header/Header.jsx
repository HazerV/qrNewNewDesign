import React, { useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "../Context/Context";
import HeaderBlack from '../Header/HeaderBlack.svg' 
import HeaderLight from '../Header/HeaderLight.svg'


const Header = ( ) => {

    const {theme} = useContext(ThemeContext)

    console.log(theme)

    if (theme === 'dark') {
        return (
        <View style={{
            alignItems: 'center',
            marginTop: 32,
            marginBottom: 16,
            marginLeft: -16
        }}>
            <HeaderBlack />
        </View> ) 
    } else {
        return (
        <View style={{
            alignItems: 'center',
            marginTop: 32,
            marginBottom: 16,
            marginLeft: -16
        }}>
            <HeaderLight />
        </View> )
    }
}

export default Header