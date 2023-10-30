import React, { useContext } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../Footer/Footer";
import { ThemeContext } from "../../Context/Context";
import Header from "../../Header/Header";
import ChinaTown from './Images/ChinaTown.png'
import Vidovoy from './Images/Vidovoy.png'


const ChangeCort = () => {
    
    const navigation = useNavigation() 
    const {theme} = useContext(ThemeContext)


    return (
        <SafeAreaView style={{
            backgroundColor: theme == 'dark' ? '#333333' : 'white',
            height: '100%'
        }}>
            <ScrollView>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Header />
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Gilroy-Regular',
                        color: theme == 'dark' ? 'white' : 'black',
                        justifyContent: 'center',
                        textAlign: 'center',
                        width: '80%',
                        fontWeight: 680
                    }}>
                        Добро пожаловать в онлайн меню буфетов концертного зала Зарядье
                    </Text>
                    <Text style={{
                        fontSize: 24,
                        fontFamily: 'Gilroy-Regular',
                        color: theme == 'dark' ? 'white' : 'black',
                        paddingTop: 38,

                    }}>
                        Выберите буфет
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        columnGap: 32,
                        paddingTop: 32,
                        width: '85%'
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <Image source={Vidovoy} />
                        </TouchableOpacity>
                            <Image source={ChinaTown} />
                    </View>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Gilroy-Regular',
                        color: theme == 'dark' ? 'white' : 'black',
                        justifyContent: 'center',
                        textAlign: 'center',
                        width: '90%',
                        fontWeight: 680,
                        paddingTop: 32
                    }}>
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