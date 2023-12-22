import React, {useContext, useEffect, useState} from "react";
import {View, Text, Image, ScrollView, TouchableOpacity, Dimensions, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../Components/Footer/Footer";
import { ThemeContext } from "../../Components/Context/Context";
import Header from "../../Components/Header/Header";
import axios from "axios";
import {config} from "../../../config";

const ChangeCort = () => {
    const [data, setData] = useState([])
    const server = config.server
    const storage = config.storage
    useEffect(() => {
        axios.get(server, {
            headers: {'SubDomain': 'zaryadye'}
        })
            .then((res) => {
                setData(res.data.data.halls)
            })
            .catch((err) => {console.log(err)})
    }, []);
    const {theme} = useContext(ThemeContext)
    const dynamicStyle = {
        bgColor: theme === 'dark' ? '#333333' : 'white',
        textColor: theme === 'dark' ? 'white' : 'black'
    }
    const navigation = useNavigation()

    return (
        <SafeAreaView style={[styles.areaView, {backgroundColor: dynamicStyle.bgColor}]}>
            <ScrollView>
                <View style={[styles.container, {color: dynamicStyle.textColor}]}>
                    <Header />
                    <Text style={[styles.welcome, {color: dynamicStyle.textColor}]}>
                        Добро пожаловать в онлайн меню буфетов концертного зала Зарядье
                    </Text>
                    <Text style={[styles.chooseBufet, {color: dynamicStyle.textColor}]}>
                        Выберите буфет
                    </Text>
                    <View style={styles.bufetImgs}>
                            {
                                data.map((img) => {
                                    return (
                                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                                            <Image style={{width: Dimensions.get('window').width -45, height: 250, resizeMode: 'contain'}}
                                                source={{uri: `${storage}/${img.image}`}} />
                                        </TouchableOpacity>
                                    )
                                })
                            }
                    </View>
                    <Text style={[styles.attention, {color: dynamicStyle.textColor}]}>
                        Вы можете забронировать стол на время антракта и сделать предзаказ.{'\n'}{'\n'}
                        1. Сформируйте заказ на сумму от 1500 руб., добавив блюда в корзину{'\n'}
                        2. Оплатите заказ{'\n'}
                        3. Во время антракта проследуйте к вашему столу, номер которого указан в деталях заказа. Выбранные вами блюда будут вас ждать
                    </Text>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    areaView: {
        height: '100%',
        justifyContent: 'center'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 14,
        fontFamily: 'Gilroy-SemiBold',
        justifyContent: 'center',
        textAlign: 'center',
        width: '90%',
        lineHeight: 16,
        paddingBottom: 38
    },
    chooseBufet: {
        fontSize: 24,
        fontFamily: 'Gilroy-SemiBold',
        lineHeight: 28,
        paddingBottom: 32
    },
    bufetImgs: {
        flexDirection: 'row',
        columnGap: 16,
        width: '100%',
        justifyContent: 'center',
        paddingBottom: 32
    },
    attention: {
        fontSize: 16,
        fontFamily: 'Gilroy-Regular',
        justifyContent: 'center',
        width: Dimensions.get('window').width -45 -45,
        lineHeight: 18,
        paddingBottom: 32
    }
})

export default ChangeCort