import React, {useContext} from "react";
import {TouchableOpacity} from "react-native";
import {ThemeContext} from "../../Context/Context";
import SunSvgB from '../icons/SunSvgB.svg'
import SunSvgW from '../icons/SunSvgW.svg'

const ThemeSwitcher = () => {

    const {theme, SetTheme} = useContext(ThemeContext)
    if (theme == 'dark') {
        return (
            <TouchableOpacity onPress={() => theme == 'light' ? SetTheme('dark') : SetTheme('light')}>
                <SunSvgB/>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity onPress={() => theme == 'light' ? SetTheme('dark') : SetTheme('light')}>
                <SunSvgW/>
            </TouchableOpacity>
        )
    }
}

export default ThemeSwitcher