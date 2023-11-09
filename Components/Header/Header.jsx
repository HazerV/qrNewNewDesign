import React, { useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "../Context/Context";
import HeaderBlack from '../Header/HeaderBlack.svg' 
import HeaderLight from '../Header/HeaderLight.svg'


const Header = ( ) => {

    const {theme} = useContext(ThemeContext)

    const styles = {
        container: {
            alignItems: 'center',
            marginTop: 32,
            marginBottom: 16,
            marginLeft: -16
        }
    }
    console.log(theme)

    if (theme === 'dark') {
        return (
        <View style={styles.container}>
            <HeaderBlack />
        </View> ) 
    } else {
        return (
        <View style={styles.container}>
            <HeaderLight />
        </View> )
    }
}

export default Header