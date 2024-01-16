import React, {useContext} from "react";
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import {ThemeContext} from "../../Components/Context/Context";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import AcceptOrd from "./AcceptOrd";
import ThemeSwitcher from "../../Components/Footer/ThemeSwitcher/ThemeSwitcher";
import ChangeButton from "./ChangeButton";
import TrueShop from '../../Components/TrueShop/TrueShop'
import {useNavigation} from "@react-navigation/native";
import {config} from "../../../config";
import ApiService from "../../Components/ApiService/ApiService";
const Home = () => {

    const {theme} = useContext(ThemeContext)
    const navigation = useNavigation()
    const dynamicSt = {
        color: theme === 'light' ? 'black' : 'white',
    }
    ApiService()
    return (

        <SafeAreaView style={{
            backgroundColor: theme === 'dark' ? '#333333' : 'white',
            height: '100%'
        }}>
            <ScrollView>
                <View style={{paddingTop: config.otstupTop,
                    // width: Dimensions.get('window').width - 20
                }}>
                    <Header/>
                    <View style={styles.container}>
                        <Text style={[styles.textHead, {color: dynamicSt.color}]}>
                            Онлайн-меню буфета «Китай-город» концертного зала Зарядье
                        </Text>
                        <View style={{marginTop: 16, paddingBottom: 16}}>
                            <AcceptOrd/>
                        </View>
                        <Text style={[styles.countTables, {color: dynamicSt.color}]}>
                            Количество столов, доступных для бронирования, ограничено
                        </Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('ChangeCort')
                        }}>
                            <ChangeButton/>
                        </TouchableOpacity>
                        <View style={styles.themeSwitcher}>
                            <ThemeSwitcher/>
                            {
                                theme === 'light' ? (
                                    <Text style={[styles.textTheme, {color: dynamicSt.color}]}>
                                        Темная тема
                                    </Text>
                                ) : (
                                    <Text style={[styles.textTheme, {color: dynamicSt.color}]}>
                                        Светлая тема
                                    </Text>
                                )
                            }
                        </View>
                        <View style={styles.contactsButtons}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Contacts')
                            }}>
                                <Text style={[styles.text, {color: dynamicSt.color}]}>
                                    Контакты
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Oferta')
                            }}>
                                <Text style={[styles.text, {color: dynamicSt.color}]}>
                                    Оферта
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[styles.text, {color: dynamicSt.color}]}>
                                    Пользовательское соглашение
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[styles.text, {color: dynamicSt.color}]}>
                                    Политика конфиденциальности
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{paddingBottom: config.otstupBottom}}>
                    <TrueShop/>
                </View>
            </ScrollView>
            <Footer/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRadius: 32,
    },
    textHead: {
        fontSize: 14,
        fontFamily: 'Gilroy-Regular',
        justifyContent: 'center',
        textAlign: 'center',
        width: '80%',
        lineHeight: 16,
    },
    countTables: {
        textAlign: 'center',
        fontFamily: 'Gilroy-Regular',
        fontSize: 12,
        lineHeight: 16,
        width: '80%',
        paddingTop: 16,
        paddingBottom: 24
    },
    themeSwitcher: {
        alignItems: 'center',
        paddingTop: 16
    },
    textTheme: {
        fontSize: 12,
        fontFamily: 'Gilroy-Regular',
        paddingBottom: 32,
        lineHeight: 16
    },
    text: {
        textDecorationLine: 'underline',
        fontSize: 12,
        fontFamily: 'Gilroy-Regular',
        textAlign: 'center',
        paddingTop: 12,
        lineHeight: 14
    },
    contactsButtons: {
        textAlign: 'center',
        justifyContent: 'center',
        rowGap: 0
    }
})
export default Home