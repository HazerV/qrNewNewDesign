import React, {useContext} from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Context, ThemeContext } from "../../Context/Context";
import Categories from "../../Categories/Categories";

const Home = () => {

    const {theme} = useContext(ThemeContext)
    const styles = {
        container: {
            width: '100%',
            height: '90%',
            backgroundColor: theme == 'dark' ? '#333333' : 'white',
            alignItems: 'center'
        }
    }
    console.log(theme)

    return (
        <SafeAreaView style={{
            backgroundColor: theme == 'dark' ? '#333333' : 'white',
            height: '100%'
            }}>
            <ScrollView>
                <View style={styles.container}>
                        <Text style={{
                            fontSize: 28,
                            fontFamily: 'Gilroy-Regular',
                            color: theme == 'dark' ? 'white' : 'black',
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '90%',
                            fontWeight: 600,
                            paddingTop: 48,
                        }}>
                            Меню
                        </Text>
                    <View style={{
                        paddingTop: 32,
                        width: '90%'
                    }}>
                        <Categories/>
                    </View>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'Gilroy-Regular',
                        color: theme == 'dark' ? 'white' : 'black',
                        justifyContent: 'center',
                        // textAlign: 'center',
                        width: '90%',
                        height: '100%',
                        fontWeight: 600,
                        paddingTop: 48
                    }}>
                        Уважаемые гости, меню является рекламной продукцией!{'\n'}{'\n'}
                        Информация о размерах порций(г), ингредиентах и наличии аллергенов, сведения о пищевой ценности готовой продукции: калорийности, содержании белков, жиров, углеводов предоставляется по запросу.
                        Забронируйте стол на время антракта и сделайте предзаказ!
                        Как это работает:
                        1. Добавьте блюда в корзину на сумму не менее 1500₽ 
                        2. Оплатите заказ
                        3. Проследуйте к вашему столу (номер указан в деталях заказа), заказанные блюда ждут вас!
                    </Text>
                </View>
            </ScrollView>
            <Footer/>
        </SafeAreaView>
    ) 

}

export default Home