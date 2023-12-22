import React, {useContext, useState} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import {ThemeContext} from "../Context/Context";
import Imageee from '../ProductItem/Image.png'
import {config} from "../../../config";

const MiniProductForPay = ({name, price, count, sum}) => {

    const {theme} = useContext(ThemeContext)
    const [pressed, setPressed] = useState(false)

    const styles = {
        container: {
            padding: 16,
            flexDirection: 'row',
            width: '100%',
        },
        nameProduct: {
            color: theme === 'light' ? 'black' : 'white',
            fontSize: 16,
            lineHeight: 20,
            fontFamily: 'Gilroy-Regular',
        },
        countes: {
            color: 'rgba(187, 187, 187, 1)',
            fontFamily: 'Gilroy-Regular',
            lineHeight: 16,
            fontSize: 14,
            paddingTop: 4
        },
        chooseProduct: {
            width: 100,
            height: 27,
            borderRadius: 22,
            backgroundColor: config.accentColorNonActive,
            justifyContent: 'center',
            position: 'relative',
            marginTop: 8
        },
        chosenProduct: {
            width: 100,
            height: 27,
            borderRadius: 22,
            backgroundColor: config.accentColor,
            justifyContent: 'center',
            marginTop: 8
        },
        chooseText: {
            fontSize: 12,
            lineHeight: 14,
            fontFamily: 'Gilroy-Regular',
            color: 'white',
            textAlign: 'center',
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.nameProduct}>
                    Брускетта с ростбифом
                </Text>
                <Text style={styles.countes}>
                    {price} руб
                </Text>
                <TouchableOpacity onPress={() => {
                    if (pressed === false) {
                        setPressed(true)
                    } else {
                        setPressed(false)
                    }}}>
                    {
                        pressed === false ? (
                            <View style={styles.chooseProduct}>
                                <Text style={styles.chooseText}>
                                    ВЫБРАТЬ
                                </Text>
                            </View>
                        ) : (
                            <View style={styles.chosenProduct}>
                                <Text style={styles.chooseText}>
                                    ВЫБРАН
                                </Text>
                            </View>
                        )
                    }
                </TouchableOpacity>
            </View>
            <View style={{paddingLeft: 168}}>
                <Image style={{width: 64, height: 64, position: 'absolute', top: 10, right: 0}} source={Imageee}/>
            </View>
        </View>
    )

}



export default MiniProductForPay


