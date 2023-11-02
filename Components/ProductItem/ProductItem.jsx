import React, { useCallback, useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ThemeContext } from "../Context/Context";
import Counter from "./Counter/Counter";
import Imageee from './Image.png'

const ProductItem = ({id, name, description, sum, weight}) => {

    
    const {theme} = useContext(ThemeContext)

    const styles = {
        container: {
            width: '95%',
            height: 172,
        },
        name: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            lineHeight: 20,
            width: '70%',
            paddingBottom: 16,
            color: theme === 'light' ? 'black' : 'white'
        },
        description: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 12,
            lineHeight: 16,
            width: '85%',
            color: theme === 'light' ? 'black' : 'white',
            marginBottom: 36
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
        image: {
            width: 100,
            height: 100,
            marginTop: -40,
            borderRadius: 8,
            marginLeft: 10
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <View style={{
                flexDirection: 'row',
                columnGap: 50,
                width: '70%'
            }}>
                <Text style={styles.description}>
                    {description}
                </Text>
                <Image style={styles.image} source={Imageee}/>
            </View>
            <View style={{
                marginTop: -20
            }}>
                <Counter />
            </View>
            <View style={{
                marginLeft: 110,
                marginTop: -40
            }}>
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