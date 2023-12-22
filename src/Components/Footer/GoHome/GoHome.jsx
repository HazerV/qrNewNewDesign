import React, {useContext} from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../../Context/Context";
import HomeW from '../icons/HomeSvgW.svg'
import HomeB from '../icons/HomeSvgB.svg'

const GoHome = () => {
    
    const {theme} = useContext(ThemeContext)
    const navigation = useNavigation()

    if (theme == 'dark') {
        return (
            <TouchableOpacity onPress={() => { navigation.navigate('Home')}}>
                <View>
                    <HomeB />
                </View>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity onPress={() => { navigation.navigate('Home')}}>
                <View>
                    <HomeW />
                </View>
            </TouchableOpacity>
        )
    }
}

export default GoHome;