import React, { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { ThemeContext } from "../../Context/Context";
import Footer from "../../Footer/Footer";


const Contacts = () => {

    const {theme} = useContext(ThemeContext)


    return (

        <SafeAreaView style = {{
            backgroundColor: theme == 'dark' ? '#333333' : 'white',
            alignSelf: 'center'
        }}>
            <ScrollView>
                <View style={{
                    alignItems: 'center',
                    width: '90%',
                    alignSelf: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Gilroy-Regular',
                        fontSize: 18,
                        lineHeight: 20,
                        paddingTop: 32,
                        paddingBottom: 32,
                        fontWeight: 700,
                        color: theme == 'light' ? 'black' : 'white'
                    }}>
                        Контакты
                    </Text>
                    <Text style={{
                        fontFamily: 'Gilroy-Regular',
                        fontSize: 14,
                        lineHeight: 16,
                        color: theme == 'light' ? 'black' : 'white'
                    }}>
                            Контакты:
Фактический адрес:  1109012, Москва, ул. Варварка, двлд. 6, стр. 4 
Электронная почта: info@ginza.ru
Телефоны: +7 (499) 222-00-00. 

Реквизиты: 
ООО "Орион" ИНН 7714364969 ОГРН 5157746123937 
Юридический адрес:
117218, город Москва, ул. Кржижановского, д. 15 к. 5,  эт 5 пом 515а оф 2
Тел./факс: +7 (499) 222-00-00.
                    </Text>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>

    )
}

export default Contacts