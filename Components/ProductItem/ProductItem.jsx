import React, { useCallback, useContext, useState } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions} from "react-native";
import { ThemeContext, CartContext } from "../Context/Context";
import Counter from "./Counter/Counter";
import Images from "./Images";



const ProductItem = ({id, name, description, sum, weight}) => {

    const {theme} = useContext(ThemeContext)
    const {increment, decrement, remove} = useContext(CartContext)
    const cartItem = {id, name, description, sum, weight, quantity: 1}

    const styles = {
        container: {
            width: '95%',
            height: 172,
            flexDirection: 'column',
            columnGap: 16,
            // paddingTop: 32
        },
        name: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            lineHeight: 20,
            width: Dimensions.get('window').width-120-60,
            paddingBottom: 16,
            color: theme === 'light' ? 'black' : 'white'
        },
        description: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 12,
            lineHeight: 16,
            color: theme === 'light' ? 'black' : 'white',
            marginBottom: 36,
            width: Dimensions.get('window').width-120-60,
        },
        summa: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            lineHeight: 19,
            color: theme === 'light' ? 'black' : 'white'
        },
        weight: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 12,
            lineHeight: 14,
            color: theme === 'light' ? 'black' : 'white'
        },
        viewSec: {
            flexDirection: 'row',
            columnGap: 50,
            width: '40%',

        }
    }




    return (
        <View style={styles.container}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>

                <View style={{
                    top: 0,
                    position: 'absolute',
                    right: 0
                }}>
                    <Images />
                </View>
                <View style={{
                    marginTop: 115,
                    position: 'absolute'
                }}>
                    <Counter />
                </View>
                <View style={{ marginLeft: 110, marginTop: 125, position: 'absolute' }}>
                    <Text style={styles.summa}>
                        {sum} руб
                    </Text>
                    <Text style={styles.weight}>
                        {weight} гр
                    </Text>
                </View>
        </View>
    )


}

export default ProductItem