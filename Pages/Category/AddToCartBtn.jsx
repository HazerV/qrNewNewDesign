import React, {useContext} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {ThemeContext} from "../../Components/Context/Context";
import {useNavigation} from "@react-navigation/native";
import {config} from "../../config";

const AddToCartBtn = () => {

    const {theme} = useContext(ThemeContext)
    const navigation = useNavigation()
    const styles = {
        container: {
            width: 250,
            height: 50,
            borderWidth: 2,
            borderRadius: 16,
            borderColor: config.buttonBorderActiveColor.color,
            backgroundColor: theme === 'light' ? 'white' : config.buttonBackgroundDark.color,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16
        },
        text: {
            fontFamily: 'Gilroy-SemiBold',
            fontSize: 14,
            lineHeight: 16,
            color: theme === 'light' ? 'black' : 'white'
        }
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('CartPage')}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Добавить к заказу
                </Text>
            </View>
        </TouchableOpacity>
    )

}

export default AddToCartBtn