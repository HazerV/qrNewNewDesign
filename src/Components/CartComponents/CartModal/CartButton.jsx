import React, {useContext, useState} from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import {ThemeContext} from "../../Context/Context";
import {config} from "../../../../config";

const CartButton = ({onPress}) => {

    const {theme} = useContext(ThemeContext)

    const sum = 4100
    const count = 9
    const styles = {
        container: {
            width: 120,
            height: 55,
            backgroundColor: theme === 'light' ? 'white' : config.buttonBackgroundDark,
            borderRadius: 14,
            borderColor: config.accentColor,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            borderWidth: 2,
            alignSelf: 'center',
            position: 'absolute',
            bottom: 16,

        },
        sum: {
            fontFamily: 'Gilroy-SemiBold',
            fontSize: 18,
            color: theme === 'light' ? 'black' : 'white',
            lineHeight: 22
        },
        count: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 14,
            lineHeight: 16,
            color: theme === 'light' ? 'black' : 'white'
        }
    }

    return (
        <TouchableOpacity onPress={() => {onPress()}}>
            <View style={styles.container}>
                <Text style = {styles.sum}>
                    {sum} руб
                </Text>
                <Text style={styles.count}>
                    {count} товаров
                </Text>
            </View>
        </TouchableOpacity>
    )

}

export default CartButton