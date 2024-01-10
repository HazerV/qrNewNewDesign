import React, {useContext} from "react";
import {SafeAreaView, ScrollView, Text, View, StyleSheet} from "react-native";
import Footer from "../../Components/Footer/Footer";
import {ThemeContext} from "../../Components/Context/Context";
import LineSvg from '../../Components/Images/Line.svg'
import MiniProductForPay from "../../Components/CartComponents/MiniProductForPay";
import PayButton from "../../Components/CartComponents/PayButton/PayButton";
import PayedProduct from "../../Components/CartComponents/PayedProduct/PayedProduct";
import {config} from "../../../config";

const SplitPay = () => {

    const {theme} = useContext(ThemeContext)
    const dynamicStyles = {
        color: theme === 'light' ? 'black' : 'white'
    }
    const sum = 1150
    const count = 2
    return (
        <SafeAreaView style={[styles.areaView,
            {
            backgroundColor: theme === 'light' ? 'white' : '#333333'
        }
        ]}>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={[styles.headText, {color: dynamicStyles.color}]}>
                            Раздельная оплата
                        </Text>
                        <Text style={[styles.underHeadText, {color: dynamicStyles.color}]}>
                            Вы выбрали {count} товара на сумму 1350 руб
                        </Text>
                    </View>
                    <LineSvg style={{ padding: 24 }}/>
                    <View style={styles.alignItemsView}>
                        <PayedProduct name={'Брускетта с пармской ветчиной и инжиром'} count={2} price={450} />
                        <MiniProductForPay name={'Брускетта с козьим сыром и тыквой'} price={350} count={2}  />
                        <MiniProductForPay name={'Брускетта с икрой'} price={350} count={2} />
                        <PayedProduct name={'Брускетта с пармской ветчиной и инжиром'} count={2} price={1000} />
                        <MiniProductForPay name={'Брускетта с икрой'} price={350} count={2} />
                        <PayedProduct name={'Брускетта с пармской ветчиной и инжиром'} count={1} price={500} />
                    </View>
                    <View style={styles.billBlock}>
                        <Text style={[styles.itogText, {color: dynamicStyles.color}]}>
                            Итого:
                        </Text>
                        <Text style={[styles.sumRubText, {color: dynamicStyles.color}]}>
                            {sum} руб
                        </Text>
                    </View>
                    <View style={{paddingBottom: config.otstupBottom}}>
                        <PayButton/>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    areaView: {
        height: '100%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 48,
    },
    headText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 24,
        lineHeight: 28,
        textAlign: 'center',
        paddingTop: 64
    },
    underHeadText: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        lineHeight: 16,
        width: 170,
        textAlign: 'center',
        alignSelf: 'center',
        paddingTop: 18,
    },
    itogText: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 16,
        lineHeight: 18,
        color: '#BBBBBB',
    },
    sumRubText: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 16,
        lineHeight: 18,
    },
    billBlock: {
        flexDirection: 'row',
        columnGap: 5,
        paddingTop: 21,
        paddingBottom: 26
    },
    alignItemsView: {
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    }
})

export default SplitPay