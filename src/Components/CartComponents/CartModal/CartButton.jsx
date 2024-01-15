import React, {useContext, useState} from "react";
import {View, Text, TouchableOpacity, Pressable, StyleSheet} from 'react-native'
import {ThemeContext, CartContext} from "../../Context/Context";
import {config} from "../../../../config";
import {useNavigation} from "@react-navigation/native";

const CartButton = ({sum, quantity}) => {

    const navigation = useNavigation()
    const {theme} = useContext(ThemeContext)
    const dynamicStyles = {
        textColor: theme === 'light' ? 'black' : 'white',
        bgColor: theme === 'light' ? 'white' : config.buttonBackgroundDark
    }
    const {cart} = useContext(CartContext)

    return (
        <Pressable
            hitSlop={50}
            onPress={() => navigation.navigate('CartPageInMenu')}>
            <View style={[styles.container, {
                backgroundColor: dynamicStyles.bgColor
            }]}>
                <Text style = {[styles.sum, {
                    color: dynamicStyles.textColor
                }]}>
                    {sum} руб
                </Text>
                <Text style={[styles.count, {
                    color: dynamicStyles.textColor
                }]}>
                    {quantity} товаров
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 55,
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
        lineHeight: 22
    },
    count: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        lineHeight: 16,
    }
})

export default CartButton