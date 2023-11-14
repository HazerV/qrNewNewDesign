import React, {useContext} from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import Footer from "../../Components/Footer/Footer";
import {ThemeContext} from "../../Components/Context/Context";
import LineSvg from '../../Components/Images/Line.svg'
import MiniProductForPay from "../../Components/CartComponents/MiniProductForPay";
import PayButton from "../../Components/CartComponents/PayButton/PayButton";
const SplitPay = () => {

    const {theme} = useContext(ThemeContext)

    const styles = {
        areaView: {
            height: '100%',
            backgroundColor: theme === 'light' ? 'white' : '#333333'
        },
        container: {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 46,
        },
        headText: {
            fontFamily: 'Gilroy-SemiBold',
            fontSize: 24,
            lineHeight: 28,
            color: theme === 'light' ? 'black' : 'white',
            textAlign: 'center'
        },
        underHeadText: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 14,
            lineHeight: 16,
            width: 170,
            textAlign: 'center',
            alignSelf: 'center',
            paddingTop: 18,
            color: theme === 'light' ? 'black' : 'white'
        },
        itogText: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            lineHeight: 18,
            color: '#BBBBBB',
        },
        sumRub: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            lineHeight: 18,
            color: theme === 'light' ? 'black' : 'white'
        },
        billBlock: {
            flexDirection: 'row',
            columnGap: 5,
            paddingTop: 21,
            paddingBottom: 20
        }

    }

    const sum = 1150
    const count = 2

    return (
        <SafeAreaView style={styles.areaView}>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.headText}>
                            Раздельная оплата
                        </Text>
                        <Text style={styles.underHeadText}>
                            Вы выбрали {count} товара на сумму 1350 руб
                        </Text>
                    </View>
                    <LineSvg style={{ padding: 24 }}/>
                    <View style={{
                        flexDirection: 'column',
                    }}>
                        <MiniProductForPay price={350} count={2} sum={230} />
                        <MiniProductForPay price={350} count={2} sum={230} />
                        <MiniProductForPay price={350} count={2} sum={230} />
                    </View>
                    <View style={styles.billBlock}>
                        <Text style={styles.itogText}>
                            Итого:
                        </Text>
                        <Text style={styles.sumRub}>
                            {sum} руб
                        </Text>
                    </View>
                    <PayButton/>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )

}

export default SplitPay