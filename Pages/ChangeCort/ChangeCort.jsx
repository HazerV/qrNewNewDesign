import React, {useContext, useEffect, useState} from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../Components/Footer/Footer";
import { ThemeContext } from "../../Components/Context/Context";
import Header from "../../Components/Header/Header";
import axios from "axios";
import ChinaTown from './Images/ChinaTown.png'
import Vidovoy from './Images/Vidovoy.png'


const ChangeCort = () => {

    const [data, setData] = useState([])
    const server = 'https://api.menu.true-false.ru/api/config'
    const storage = 'https://api.menu.true-false.ru/storage'
    useEffect(() => {
        axios.get(server, {
            headers: {'SubDomain': 'zaryadye'}
        })
            .then((res) => {
                // console.log(res.data.data.halls)
                setData(res.data.data.halls)
            })
            .catch((err) => {console.log(err)})
    }, []);

    // console.log(data)
    const navigation = useNavigation() 
    const {theme} = useContext(ThemeContext)
    const styles = {
        areaView: {
            backgroundColor: theme === 'dark' ? '#333333' : 'white',
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
            color: theme === 'dark' ? 'white' : 'black',
            justifyContent: 'center',
            textAlign: 'center',
            width: '90%',
            lineHeight: 16
        },
        chooseBufet: {
            fontSize: 24,
            fontFamily: 'Gilroy-SemiBold',
            color: theme === 'dark' ? 'white' : 'black',
            paddingTop: 38,
            lineHeight: 28
        },
        bufetImgs: {
            flexDirection: 'row',
            columnGap: 16,
            paddingTop: 32,
            width: '100%',
            justifyContent: 'center'
        },
        attention: {
            fontSize: 16,
            fontFamily: 'Gilroy-Regular',
            color: theme === 'dark' ? 'white' : 'black',
            justifyContent: 'center',
            width: '80%',
            paddingTop: 32,
            lineHeight: 18,
            paddingBottom: 32
        }
    }
    console.log(data.image)

    return (
        <SafeAreaView style={styles.areaView}>
            <ScrollView>
                <View style={styles.container}>
                    <Header />
                    <Text style={styles.welcome}>
                        Добро пожаловать в онлайн меню буфетов концертного зала Зарядье
                    </Text>
                    <Text style={styles.chooseBufet}>
                        Выберите буфет
                    </Text>
                    <View style={styles.bufetImgs}>
                            {
                                data.map((img, index) => {
                                    console.log(img.image)
                                    return (
                                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                                            <Image style={{width: 400, height: 250, resizeMode: 'contain'}}
                                                source={{uri: `${storage}/${img.image}`}} />
                                        </TouchableOpacity>
                                    )
                                })
                            }
                    </View>
                    <Text style={styles.attention}>
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

export default ChangeCort