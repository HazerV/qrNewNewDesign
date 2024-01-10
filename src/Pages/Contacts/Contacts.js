import React, { useContext } from "react";
import {View, Text, SafeAreaView, ScrollView, Dimensions, StyleSheet} from "react-native";
import { ThemeContext } from "../../Components/Context/Context";
import Footer from "../../Components/Footer/Footer";

const Contacts = () => {

    const {theme} = useContext(ThemeContext)
    const dynamicStyles = {
        textColor: theme === 'light' ? 'black' : 'white',
        bgColor: theme === 'light' ? 'white' : '#333333'
    }

    return (
        <SafeAreaView style={{
            alignSelf: 'center',
            height: '100%',
            backgroundColor: theme === 'light' ? 'white' : '#333333'
        }}>
            <ScrollView>
                <View style={[styles.container, {width: Dimensions.get('window').width-20}]}>
                    <Text style={[styles.headNameText, {color: dynamicStyles.textColor}]}>
                        Контакты
                    </Text>
                    <Text style={[styles.text, {color: dynamicStyles.textColor}]}>
                        {'\n'}
                        Контакты:{'\n'}{'\n'}
                        Фактический адрес: 1109012, Москва, ул. Варварка, двлд. 6, стр. 4{'\n'}
                        Электронная почта: info@ginza.ru{'\n'}
                        Телефоны: +7 (499) 222-00-00.{'\n'}
                        {'\n'}{'\n'}
                        Реквизиты:{'\n'}{'\n'}
                        ООО "Орион" ИНН 7714364969 ОГРН 5157746123937{'\n'}
                        Юридический адрес:{'\n'}
                        117218, город Москва, ул. Кржижановского, д. 15 к. 5, эт 5 пом 515а оф 2{'\n'}
                        Тел./факс: +7 (499) 222-00-00.{'\n'}
                    </Text>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    viewFirst: {
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        paddingLeft: 10
    },
    headNameText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 24,
        lineHeight: 28,
        paddingTop: 32,
        paddingBottom: 32,
    },
    text: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        lineHeight: 16,
    }
})

export default Contacts