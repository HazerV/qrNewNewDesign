import React, { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { ThemeContext } from "../../Context/Context";
import Footer from "../../Footer/Footer";


const Contacts = () => {

    const {theme} = useContext(ThemeContext)


    return (

        <SafeAreaView style = {{
            backgroundColor: theme === 'dark' ? '#333333' : 'white',
            alignSelf: 'center'
        }}>
            <ScrollView>
                <View style={{
                    alignItems: 'center',
                    width: '90%',
                    alignSelf: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Gilroy-SemiBold',
                        fontSize: 24,
                        lineHeight: 20,
                        paddingTop: 48,
                        paddingBottom: 16,
                        color: theme === 'light' ? 'black' : 'white'
                    }}>
                        Контакты
                    </Text>
                    <Text style={{
                        fontFamily: 'Gilroy-Regular',
                        fontSize: 16,
                        lineHeight: 18,
                        color: theme === 'light' ? 'black' : 'white'
                    }}>
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

export default Contacts