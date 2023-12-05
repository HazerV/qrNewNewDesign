import React, {useContext} from "react";
import {Text, View} from "react-native";
import {ThemeContext} from "../../Context/Context";
import {config} from "../../../config";

const PayButton = () => {

    const {theme} = useContext(ThemeContext)
    const styles = {
        container: {
            width: 242,
            height: 48,
            backgroundColor: theme == 'light' ? 'white' : config.buttonBackgroundDark.color,
            borderRadius: 16,
            borderWidth: 2,
            borderColor: config.buttonBorderActiveColor.color,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            fontFamily: 'Gilroy-SemiBold',
            fontSize: 14,
            lineHeight: 16,
            color: theme === 'light' ? 'black' : 'white'
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Оплатить заказ
            </Text>
        </View>
    )

}

export default PayButton