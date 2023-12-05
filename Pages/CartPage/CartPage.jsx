import React, {useContext} from "react";
import {Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {ThemeContext} from "../../Components/Context/Context";
import Footer from "../../Components/Footer/Footer";
import PlusSvgBlack from '../../Components/CartComponents/icons/PlusBlack.svg'
import PlusSvgWhite from '../../Components/CartComponents/icons/PlusWhite.svg'
import LineSvg from '../../Components/Images/Line.svg'
import MiniCartProduct from "../../Components/CartComponents/CartModal/MiniCartProduct";
import {useNavigation} from "@react-navigation/native";
import BonusTab from "../../Components/CartComponents/Bonus/BonusTab";
import PayButton from "../../Components/CartComponents/PayButton/PayButton";
import {config} from "../../config";

const CartPage = () => {

    const navigation = useNavigation()
    const {theme} = useContext(ThemeContext)
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
            borderColor: config.buttonBorderActiveColor.color,
            backgroundColor: theme === 'light' ? 'white' : 'black'
        },
        textTable: {
            fontFamily: 'Gilroy-SemiBold',
            fontSize: 24,
            lineHeight: 28,
            color: textColor,
            padding: 16,
            paddingTop: 64
        },
        container: {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'column',
            paddingTop: 30,
        },
        addToOrder: {
            fontSize: 14,
            lineHeight: 16,
            fontFamily: 'Gilroy-Regular',
            paddingTop: 8,
            color: textColor
        },
        splitPayText: {
            fontSize: 14,
            textDecorationLine: 'underline',
            fontFamily: 'Gilroy-Regular',
            paddingTop: 24,
            paddingBottom: 48,
            color: theme === 'light' ? 'black' : 'white'
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
                                {
                                    theme === 'dark' ? (
                                        <PlusSvgBlack style={{alignSelf: 'center', margin: 24}}/>
                                    ) : (
                                        <PlusSvgWhite style={{alignSelf: 'center', margin: 24}} />
                                    )
                                }

                            </View>
                        </TouchableOpacity>
                        <Text style={styles.addToOrder}>
                            Дополнить заказ
                        </Text>
                    </View>
                    <LineSvg style={{
                        paddingTop: 32
                    }}/>
                    <MiniCartProduct price={450} count={2} sum={900}/>
                    <MiniCartProduct price={450} count={2} sum={900}/>
                    <MiniCartProduct price={450} count={2} sum={900}/>
                    <LineSvg style={{
                        paddingTop: 32
                    }}/>
                    <MiniCartProduct price={450} count={2} sum={900}/>
                    <MiniCartProduct price={450} count={2} sum={900}/>
                    <LineSvg style={{
                        paddingTop: 32
                    }}/>
                    <View style={{paddingTop: 24}}>
                        <BonusTab style={{ alignSelf: 'center'}}/>
                    </View>
                    <PayButton/>
                    <TouchableOpacity onPress={() => navigation.navigate('SplitPay')}>
                        <Text style={styles.splitPayText}>
                            Раздельная оплата
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <Footer/>
        </SafeAreaView>
    )

}

export default CartPage