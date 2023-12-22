import React, {useContext} from "react";
import {Text, View, Image, SafeAreaView, TouchableOpacity, Dimensions} from "react-native";
import {ThemeContext} from "../../Context/Context";
import Imageee from '../../ProductItem/Image.png'

const MiniCartProduct = ({price, count, sum }) => {

    const {theme} = useContext(ThemeContext)
    const name = 'Брускетта с ростбифом'

    const styles = {
        container: {
            paddingBottom: 46,
            flexDirection: 'column',
            flexWrap: 'wrap',
            width: Dimensions.get('window').width-25,
            // alignItems: 'center',
            // justifyContent: 'center',
            columnGap: 16,

        },
        textHead: {
            color: theme === 'light' ? 'black' : 'white',
            fontSize: 16,
            lineHeight: 20,
            fontFamily: 'Gilroy-Regular',
            paddingBottom: 4,
        },
        countSum: {
            color: 'rgba(187, 187, 187, 1)',
            fontFamily: 'Gilroy-Regular',
            lineHeight: 16,
            fontSize: 14,
        },
    }

    return (
        <View style={styles.container}>
                <Text style={styles.textHead}>
                    Брускетта с ростбифом
                </Text>
                <Text style={styles.countSum}>
                    {price} x {count} = {sum} руб
                </Text>
                <Image style={{width: 64, height: 64, position: 'absolute', right: 0}} source={Imageee} />
        </View>
    )

}

export default MiniCartProduct

