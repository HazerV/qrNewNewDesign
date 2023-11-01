import React, {useContext} from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import {ThemeContext} from "../Context/Context";

const CartButton = () => {

    const sum = 4100
    const count = 9
    const {theme} = useContext(ThemeContext)


    const styles = {
        container: {
            width: 120,
            height: 55,
            backgroundColor: theme === 'light' ? 'white' : 'black',
            borderRadius: 14,
            borderColor: 'rgba(255, 122, 0, 1)',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            borderWidth: 2,
            alignSelf: 'center',
            position: 'absolute', bottom: 16,

        }
    }

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style = {{
                    fontFamily: 'Gilroy-Regular',
                    fontSize: 18,
                    color: theme === 'light' ? 'black' : 'white',
                    lineHeight: 20
                }}>
                    {sum} руб
                </Text>
                <Text style={{
                    fontFamily: 'Gilroy-Regular',
                    fontSize: 14,
                    color: theme === 'light' ? 'black' : 'white'
                }}>
                    {count} товаров
                </Text>
            </View>
        </TouchableOpacity>
    )

}

export default CartButton