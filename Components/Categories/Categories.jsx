import React, {useEffect, useState, useContext} from "react";
import {View, Image, TouchableOpacity, Text, Dimensions} from "react-native";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";
import stylesCategories from "./StylesCategories";
import {CategoryContext, ThemeContext} from "../Context/Context";
import DefaultInitialImageDimensions from "react-native-render-html/src/elements/defaultInitialImageDimensions";

const Categories = () => {

    const {Category, setCategory} = useContext(CategoryContext)
    const navigation = useNavigation()
    const serverUrl = 'https://api.menu.true-false.ru'

    const getName = () => {
        axios.get(`${serverUrl}/api/categories`, {
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
        <View style={[stylesCategories.container, {width: Dimensions.get('window').width}]}>
            {Category.map((cat, index) => {
                return (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Categories', {
                            cat
                        })
                    }}>
                            <Image key={index} style={stylesCategories.imgSize}
                               source={{uri: `${serverUrl}/storage/${cat.preview}`}}/>
                    </TouchableOpacity>
                )
            })}
            <Text style={{
                fontSize: 12,
                lineHeight: 16,
                fontFamily: 'Gilroy-Regular',
                color: theme === 'dark' ? 'white' : 'black',
                justifyContent: 'flex-start',
                fontWeight: 600,
                paddingTop: 25,
                textAlign: 'left',
                paddingBottom: 100,
                width: Dimensions.get('window').width - 60
            }}>
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

export default Categories