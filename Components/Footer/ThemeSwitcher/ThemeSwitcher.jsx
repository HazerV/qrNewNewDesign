import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import SunSvgB from '../icons/SunSvgB.svg'
import SunSvgW from '../icons/SunSvgW.svg'
import { Context, ThemeContext } from "../../Context/Context";

const ThemeSwitcher = () => {

    const {theme, SetTheme} = useContext(ThemeContext)

    if (theme == 'dark') {
        return (
            <TouchableOpacity onPress={() => theme == 'light' ? SetTheme('dark') : SetTheme('light')}>
                    <SunSvgB />
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity onPress={() => theme == 'light' ? SetTheme('dark') : SetTheme('light')}>
                    <SunSvgW />
            </TouchableOpacity>
        )
    }
}

export default ThemeSwitcher