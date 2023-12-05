import React, {useContext, useState} from "react";
import {View, Text, TouchableOpacity, Pressable, Modal} from 'react-native'
import {ThemeContext} from "../../Context/Context";
import {config} from "../../../config";

const CartButton = () => {

    const {theme} = useContext(ThemeContext)

    const sum = 4100
    const count = 9
    const styles = {
        container: {
            width: 120,
            height: 55,
            backgroundColor: theme === 'light' ? 'white' : config.buttonBackgroundDark.color,
            borderRadius: 14,
            borderColor: config.buttonBorderActiveColor.color,
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

    const [visible, setVisible] = useState(false)
    const show = () => setVisible(true)
    const hide = () => setVisible(false)


    return (


            <View style={styles.container}>
                <Text style = {styles.sum}>
                    {sum} руб
                </Text>
                <Text style={styles.count}>
                    {count} товаров
                </Text>
            </View>
    )

}

export default CartButton