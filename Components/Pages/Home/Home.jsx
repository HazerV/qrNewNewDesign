import React, { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { ThemeContext  } from "../../Context/Context";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import AcceptOrd from "./AcceptOrd";
import ThemeSwitcher from "../../Footer/ThemeSwitcher/ThemeSwitcher";
import ChangeButton from "./ChangeButton";
import TrueShop from '../../TrueShop/TrueShop'
import Categories from "../../Categories/Categories";
import { useNavigation } from "@react-navigation/native";

const Home = () => {

    const {theme, SetTheme} = useContext(ThemeContext)
    const navigation = useNavigation()

    const styles = {
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomRadius: 32
        },
        areaView: {
            backgroundColor: theme == 'dark' ? '#333333' : 'white',
            height: '100%'
        },
        textHead: {
            fontSize: 16,
            fontFamily: 'Gilroy-Regular',
            color: theme == 'dark' ? 'white' : 'black',
            justifyContent: 'center',
            textAlign: 'center',
            width: '80%',
        },
        countTables: {
            color: theme == 'light' ? 'black' : 'white',
            textAlign: 'center' ,
            fontFamily: 'Gilroy-Regular',
            fontSize: 14,
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
            color: theme == 'light' ? 'black' : 'white',
            fontSize: 14,
            fontFamily: 'Gilroy-Regular',
            paddingBottom: 32
        },
        text: {
            textDecorationLine: 'underline',
            fontSize: 14,
            fontFamily: 'Gilroy-Regular',
            color: theme == 'light' ? 'black' : 'white',
            textAlign: 'center',
            paddingTop: 12
        }
    }

    return (
        <SafeAreaView style={styles.areaView}>
                <ScrollView>
                    <View style={{}}>
                        <Header />
                        <View style={styles.container}>
                            <Text style={styles.textHead}>
                                Онлайн-меню буфета «Китай-город» концертного зала Зарядье
                            </Text>
                            <View style={{marginTop: 16, paddingBottom: 16}}>
                                <AcceptOrd />
                            </View>
                            <Text style={styles.countTables}>
                                    Количество столов, доступных для бронирования, ограничено
                            </Text>
                            <TouchableOpacity onPress={() => {navigation.navigate('ChangeCort')}}>
                                <ChangeButton />
                            </TouchableOpacity>
                            <View style={styles.themeSwitcher}>
                                <ThemeSwitcher />
                                    {
                                     theme == 'light' ?  (
                                            <Text style={styles.textTheme}>
                                                Темная тема
                                            </Text>
                                        ) :  (
                                            <Text style = {styles.textTheme}>
                                                Светлая тема
                                            </Text>
                                        )
                                    }
                            </View>
                            <View style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                rowGap: 0
                            }}>
                                <TouchableOpacity onPress={() => {navigation.navigate('Contacts')}}>
                                    <Text style={styles.text}>
                                        Контакты
                                    </Text>
                                </TouchableOpacity>
                        
                                <TouchableOpacity onPress={() => {navigation.navigate('Oferta')}}>
                                    <Text style={styles.text}>
                                        Оферта
                                    </Text>
                                </TouchableOpacity>
                        
                                <TouchableOpacity>
                                    <Text style={styles.text}>
                                        Пользовательское соглашение
                                    </Text>
                                </TouchableOpacity>
                        
                                <TouchableOpacity>
                                    <Text style={styles.text}>
                                        Политика конфиденциальности
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TrueShop />
                </ScrollView>
                <Footer/>
        </SafeAreaView>
    )

}

export default Home