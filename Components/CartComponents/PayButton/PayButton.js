import React, {useContext} from "react";
import {Text, View} from "react-native";
import {ThemeContext} from "../../Context/Context";
import {config} from "../../../config";

const PayButton = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <View style={{
            width: 242,
            height: 48,
            backgroundColor: theme == 'light' ? 'white' : 'black',
            borderRadius: 16,
            borderWidth: 2,
            borderColor: config.buttonBorderActiveColor.color,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                fontFamily: 'Gilroy-SemiBold',
                fontSize: 14,
                lineHeight: 16,
                color: theme === 'light' ? 'black' : 'white'
            }}>
                Оплатить заказ
            </Text>
        </View>
    )

}

export default PayButton