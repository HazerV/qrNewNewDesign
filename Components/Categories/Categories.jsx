import React, {useEffect, useState, useContext} from "react";
import {View, Image, TouchableOpacity, Text} from "react-native";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";
import stylesCategories from "./StylesCategories";
import {CategoryContext} from "../Context/Context";

const Categories = () => {

    const {CategoryVal, setCategoryVal} = useContext(CategoryContext)
    const navigation = useNavigation()
    const [paths, setPaths] = useState([])
    const serverUrl = 'https://api.menu.true-false.ru'

    const getName = () => {
        axios.get(`${serverUrl}/api/categories`, {
            headers: {'SubDomain': 'zaryadye'}
        })
            .then(res => {
                setPaths(
                    res.data.data.map(g => {
                        return g.preview;
                    })
                )
            })
            .catch(err => console.log(err))
    };
    useEffect(() => {
        getName()
    }, []);

    return (
        <View style={stylesCategories.container}>
            {paths.map((preview, index) => {

                return (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Categories', {
                            index
                        })
                        setCategoryVal(index)
                        console.log(CategoryVal)
                    }}>
                        <Image key={index} style={stylesCategories.imgSize}
                               source={{uri: `${serverUrl}/storage/${preview}`}}/>
                    </TouchableOpacity>
                )})}
        </View>
    )
}

export default Categories