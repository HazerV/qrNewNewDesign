import React, {useContext} from "react";
import {Text, View, Image, SafeAreaView, TouchableOpacity} from "react-native";
import {ThemeContext} from "../../Context/Context";
import Imageee from '../../ProductItem/Image.png'

const MiniCartProduct = ({price, count, sum }) => {

    const {theme} = useContext(ThemeContext)
    const name = 'Брускетта с ростбифом'

    const styles = {
        container: {
            padding: 4,
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            paddingLeft: 32,
            alignItems: 'center',
            justifyContent: 'center'
        },
        textHead: {
            color: theme === 'light' ? 'black' : 'white',
            fontSize: 16,
            lineHeight: 20,
            fontFamily: 'Gilroy-Regular'
        },
        countSum: {
            color: 'rgba(187, 187, 187, 1)',
            fontFamily: 'Gilroy-Regular',
            lineHeight: 16,
            fontSize: 14,
            paddingTop: 4
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textHead}>
                    Брускетта с ростбифом
                </Text>
                <Text style={styles.countSum}>
                    {price} x {count} = {sum} руб
                </Text>
            </View>
            <View style={{ paddingLeft: 90}}>
                <Image style={{width: 64, height: 64}} source={Imageee} />
            </View>
        </View>
    )

}

export default MiniCartProduct

