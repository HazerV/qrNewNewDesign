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
            backgroundColor: theme === 'dark' ? '#333333' : 'white',
            alignItems: 'center'
        },
        headName: {
            fontSize: 24,
            lineHeight: 28,
            fontFamily: 'Gilroy-SemiBold',
            color: theme === 'dark' ? 'white' : 'black',
            justifyContent: 'center',
            textAlign: 'center',
            width: '90%',
            fontWeight: 600,
            paddingTop: 48,
        },
        attention: {
            fontSize: 12,
            lineHeight: 16,
            fontFamily: 'Gilroy-Regular',
            color: theme === 'dark' ? 'white' : 'black',
            justifyContent: 'center',
            width: '80%',
            height: '100%',
            fontWeight: 600,
            paddingTop: 25
        }
    }

    return (
        <SafeAreaView style={{
            backgroundColor: theme === 'dark' ? '#333333' : 'white',
            height: '100%'
            }}>
            <ScrollView>
                <View style={styles.container}>
                        <Text style={styles.headName}>
                            Меню
                        </Text>
                    <View style={{
                        paddingTop: 16,
                        width: '90%'
                    }}>
                        <Categories/>
                    </View>
                    <Text style={styles.attention}>
                        Уважаемые гости, меню является рекламной продукцией!{'\n'}{'\n'}
                        Информация о размерах порций(г), ингредиентах и наличии аллергенов, сведения о пищевой ценности готовой продукции: калорийности, содержании белков, жиров, углеводов предоставляется по запросу.
                        Забронируйте стол на время антракта и сделайте предзаказ!{'\n'}
                        {'\n'}Как это работает:{'\n'}
                        {'\n'}1. Добавьте блюда в корзину на сумму не менее 1500₽{'\n'}
                        {'\n'}2. Оплатите заказ{'\n'}
                        {'\n'}3. Проследуйте к вашему столу (номер указан в деталях заказа), заказанные блюда ждут вас!{'\n'}
                    </Text>
                </View>
            </ScrollView>
            <Footer/>
        </SafeAreaView>
    ) 

}

export default Home