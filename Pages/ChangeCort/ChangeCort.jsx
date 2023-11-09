import React, { useContext } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../Components/Footer/Footer";
import { ThemeContext } from "../../Components/Context/Context";
import Header from "../../Components/Header/Header";
import ChinaTown from './Images/ChinaTown.png'
import Vidovoy from './Images/Vidovoy.png'


const ChangeCort = () => {
    
    const navigation = useNavigation() 
    const {theme} = useContext(ThemeContext)
    const styles = {
        areaView: {
            backgroundColor: theme === 'dark' ? '#333333' : 'white',
            height: '100%'
        },
        welcome: {
            fontSize: 14,
            fontFamily: 'Gilroy-SemiBold',
            color: theme === 'dark' ? 'white' : 'black',
            justifyContent: 'center',
            textAlign: 'center',
            width: '80%',
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
            columnGap: 32,
            paddingTop: 32,
            width: '85%'
        },
        attention: {
            fontSize: 16,
            fontFamily: 'Gilroy-Regular',
            color: theme === 'dark' ? 'white' : 'black',
            justifyContent: 'center',
            textAlign: 'center',
            width: '90%',
            paddingTop: 32,
            lineHeight: 18
        }
    }

    return (
        <SafeAreaView style={styles.areaView}>
            <ScrollView>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Header />
                    <Text style={styles.welcome}>
                        Добро пожаловать в онлайн меню буфетов концертного зала Зарядье
                    </Text>
                    <Text style={styles.chooseBufet}>
                        Выберите буфет
                    </Text>
                    <View style={styles.bufetImgs}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <Image source={Vidovoy} />
                        </TouchableOpacity>
                            <Image source={ChinaTown} />
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