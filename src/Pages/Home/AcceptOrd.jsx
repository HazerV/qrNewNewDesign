import React, {useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../../Components/Context/Context";
import {config} from "../../../config";

const AcceptOrd = () => {

    const {theme} = useContext(ThemeContext)

    const styles = {
        container: {
            width: 350,
            borderTopRadius: 245,
            backgroundColor: config.accentColor,
            borderRadius: 32,
            padding: 16 
        },
        textIn: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 14,
            lineHeight: 16,
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center'
        }
    }

    return (
        <View style = {styles.container}>
            <Text style={styles.textIn}>
                Заказы принимаются с 12:00 до 18:00 в день проведения концерта
            </Text>
        </View>
    )

}

export default AcceptOrd