import React, {useContext} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {ThemeContext} from "../../Components/Context/Context";
import {useNavigation} from "@react-navigation/native";

const AddToCartBtn = () => {

    const {theme} = useContext(ThemeContext)
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('CartPage')}>
            <View style={{
                width: 250,
                height: 50,
                borderWidth: 2,
                borderRadius: 16,
                borderColor: 'rgba(255, 122, 0, 1)',
                backgroundColor: theme === 'light' ? 'white' : 'black',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16
            }}>
                <Text style={{
                    fontFamily: 'Gilroy-SemiBold',
                    fontSize: 14,
                    lineHeight: 16,
                    color: theme === 'light' ? 'black' : 'white'
                }}>
                    Добавить к заказу
                </Text>
            </View>
        </TouchableOpacity>
    )

}

export default AddToCartBtn