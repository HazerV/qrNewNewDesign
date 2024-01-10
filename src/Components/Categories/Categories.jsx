import React, {useEffect, useState, useContext} from "react";
import {View, Image, TouchableOpacity, StyleSheet, Text, Dimensions} from "react-native";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";
import stylesCategories from "./StylesCategories";
import {CategoryContext, ThemeContext} from "../Context/Context";
import {config} from "../../../config";

const Categories = () => {

    const {Category, setCategory} = useContext(CategoryContext)
    const navigation = useNavigation()
    const serverUrl = config.server
    const getName = () => {
        axios.get(`${serverUrl}/categories`, {
            headers: {'SubDomain': 'zaryadye'}
        })
            .then(res => {
                setCategory(
                    res.data.data
                )
            })
            .catch(err => console.log(err))
    };
    useEffect(() => {
        getName()
    }, []);
    const {theme} = useContext(ThemeContext)
    return (
        <View style={[stylesCategories.container]}>
            {Category.map((cat, index) => {
                return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Categories', {
                                cat
                            })
                        }}>
                                <Image key={index} style={stylesCategories.imgSize}
                                   source={{uri: `${config.storage}${cat.preview}`}}/>
                        </TouchableOpacity>
                )
            })}
            <Text style={[styles.attention,
                {color: theme==='light' ? 'black' : 'white'}
            ]}>
                Уважаемые гости, меню является рекламной продукцией!{'\n'}{'\n'}
                Информация о размерах порций(г), ингредиентах и наличии аллергенов, сведения о пищевой ценности готовой
                продукции: калорийности, содержании белков, жиров, углеводов предоставляется по запросу.
                Забронируйте стол на время антракта и сделайте предзаказ!{'\n'}
                {'\n'}Как это работает:{'\n'}
                {'\n'}1. Добавьте блюда в корзину на сумму не менее 1500₽{'\n'}
                {'\n'}2. Оплатите заказ{'\n'}
                {'\n'}3. Проследуйте к вашему столу (номер указан в деталях заказа), заказанные блюда ждут вас!{'\n'}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    attention: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Gilroy-Regular',
        paddingTop: 25,
        paddingBottom: config.otstupBottom,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 358,
    }
})

export default Categories