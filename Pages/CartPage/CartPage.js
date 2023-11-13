import React, {useContext} from "react";
import {Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {ThemeContext} from "../../Components/Context/Context";
import Footer from "../../Components/Footer/Footer";
import PlusSvg from './Plus.svg'
import LineSvg from './Line.svg'
import MiniCartProduct from "../../Components/CartRealise/MiniCartProduct";
import {useNavigation} from "@react-navigation/native";

const CartPage = () => {

    const navigation = useNavigation()
    const { theme } = useContext(ThemeContext)
    let bgColor = 'white'
    let textColor = 'white'

    if (theme === 'light') {
        textColor = 'black'
    }
    if (theme === 'light') {
        bgColor = 'white'
    }
    if (theme === 'dark') {
        bgColor = '#333333'
    }


    const styles = {
        areaView: {
            height: '100%',
            backgroundColor: bgColor
        },
        plusBox: {
            width: 64,
            height: 64,
            borderRadius: 16,
            borderWidth: 2,
            borderColor: 'rgba(255, 122, 0, 1)',
            backgroundColor: "black"
        },
        textTable: {
            fontFamily: 'Gilroy-SemiBold',
            fontSize: 24,
            lineHeight: 28,
            color: textColor,
            padding: 16
        },
        container: {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'column',
            paddingTop: 30,
        }
    }

    const numberTable = 7

    return (
        <SafeAreaView style={styles.areaView}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.textTable}>
                        Стол №{numberTable}
                    </Text>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <View style={styles.plusBox}>
                                <PlusSvg style={{alignSelf: 'center', margin: 24}} />
                            </View>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 14,
                            lineHeight: 16,
                            fontFamily: 'Gilroy-Regular',
                            paddingTop: 8,
                            color: textColor
                        }}>
                            Дополнить заказ
                        </Text>
                    </View>
                    <LineSvg style={{
                        paddingTop: 32
                    }}/>
                    <MiniCartProduct price={450} count={2} sum={900} />
                    <MiniCartProduct price={450} count={2} sum={900} />
                    <MiniCartProduct price={450} count={2} sum={900} />
                    <LineSvg style={{
                        paddingTop: 32
                    }}/>
                    <MiniCartProduct price={450} count={2} sum={900} />
                    <MiniCartProduct price={450} count={2} sum={900} />
                </View>


            </ScrollView>
            <Footer />
        </SafeAreaView>
    )

}

export default CartPage