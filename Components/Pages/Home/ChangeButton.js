import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../../Context/Context";


const ChangeButton = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <View style={{
            width: 180,
            padding: 16,
            borderRadius: 16,
            backgroundColor: theme === 'light' ? 'white' : '#232323',
            borderColor: '#CCCCCC',
            borderWidth: 2,
        }}>
            <Text style={{
                fontFamily: 'Gilroy-SemiBold',
                fontSize: 14,
                lineHeight: 16,
                fontWeight: 600,
                color: theme === 'light' ? 'black' : 'white',
                textAlign: 'center'
            }}>
                Сменить буфет
            </Text>
        </View>
    )

}

export default ChangeButton