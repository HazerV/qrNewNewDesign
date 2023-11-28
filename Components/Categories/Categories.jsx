import React, {useEffect, useState, useContext} from "react";
import {View, Image, TouchableOpacity, Text, Dimensions} from "react-native";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";
import stylesCategories from "./StylesCategories";
import {CategoryContext} from "../Context/Context";

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

    return (
        <View style={[stylesCategories.container, {width: Dimensions.get('window').width }]}>
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
        </View>
    )
}

export default Categories