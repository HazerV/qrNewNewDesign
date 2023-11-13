import React, {useContext} from "react";
import {Text, View, Image, SafeAreaView} from "react-native";
import {ThemeContext} from "../Context/Context";
import Imageee from '../ProductItem/Image.png'

const MiniCartProduct = ({price, count, sum }) => {

    const theme = useContext(ThemeContext)
    const name = 'Брускетта с ростбифом'


    const styles = {
        container: {
            width: '100%',
            backgroundColor: '#333333',
            height: 64,
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            // display: 'flex',

        },
        name: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            lineHeight: 18,
            color: theme === 'light' ? 'black' : 'white',
        },
        text: {
            color: 'rgba(187, 187, 187, 1)',
            fontSize: 14,
            lineHeight: 16,
            fontFamily: 'Gilroy-Regular',
            paddingTop: 4,
        },
        img: {
            marginLeft: 130,
            width: 64,
            height: 64,
        }
    }

    return (
        <SafeAreaView styles={{
            width: '90%'
        }}>
            <View styles={{
                paddingBottom: 16,
                padding: 100
            }}>
                <Text style={styles.name}>
                    Брускетта с ростбифом
                </Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        color: 'rgba(187, 187, 187, 1)',
                        fontSize: 14,
                        lineHeight: 17,
                        fontFamily: 'Gilroy-Regular',
                        paddingTop: 4
                    }}>
                        {price} руб x {count} = {sum} руб
                    </Text>
                </View>
                <View style={{
                    position: 'absolute',
                    paddingLeft: 200,
                    paddingBottom: 32
                }}>
                    <Image style={{width: 64, height: 64}} source={Imageee}/>
                </View>
            </View>
        </SafeAreaView>
    )

}

export default MiniCartProduct