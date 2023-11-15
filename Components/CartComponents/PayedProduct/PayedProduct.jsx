import React, {useState, useContext} from "react";
import {ThemeContext} from "../../Context/Context";
import {Image, Text, TouchableOpacity, View} from "react-native";
import Imageee from "../../ProductItem/Image.png";

const name = 'Брускетта с пармской ветчиной и инжиром'

const PayedProduct = ({name, price, count, sum}) => {

    const {theme} = useContext(ThemeContext)
    const [pressed, setPressed] = useState(false)

    const styles = {
        container: {
            padding: 16,
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
        },
        nameProduct: {
            color: 'gray',
            fontSize: 16,
            lineHeight: 20,
            fontFamily: 'Gilroy-Regular',
            width: '80%'
        },
        countes: {
            color: 'gray',
            fontFamily: 'Gilroy-Regular',
            lineHeight: 16,
            fontSize: 14,
            paddingTop: 4
        },
        chooseProduct: {
            width: 99,
            height: 27,
            borderWidth: 2,
            borderRadius: 20,
            backgroundColor: '#555555',
            justifyContent: 'center',
            position: 'relative',
            borderColor: '#555555',
            marginTop: 8
        },
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.nameProduct}>
                    {name}
                </Text>
                <Text style={styles.countes}>
                    {price} руб
                </Text>
            </View>
            <View style={{paddingLeft: 90, opacity: 0.5, position: 'absolute', top: 20, right: 0}}>
                <Image style={{width: 64, height: 64}} source={Imageee}/>
            </View>
        </View>
    )

}

export default PayedProduct