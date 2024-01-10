import React, {useContext} from "react";
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import LineSvg from '../../Components/Images/Line.svg'
import MiniCartProduct from "../../Components/CartComponents/CartModal/MiniCartProduct";
import AddToCartBtn from "../CategoryPage/AddToCartBtn";
import CartButton from "../../Components/CartComponents/CartModal/CartButton";
import Footer from "../../Components/Footer/Footer";
import {ThemeContext} from "../../Components/Context/Context";
import {config} from "../../../config";

const CartPageInMenu = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <SafeAreaView style={{
            width: '100%',
            height: '100%',
            backgroundColor: theme === 'light' ? 'white' : '#33333',
        }}>
            <ScrollView>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: config.otstupBottom
                }}>
                    <Text style = {{
                        color: theme === 'light' ? 'black' : 'white',
                        fontFamily: 'Gilroy-SemiBold',
                        fontSize: 24,
                        lineHeight: 28,
                        paddingTop: 60
                    }}>
                        Корзина
                    </Text>
                    <View style={{
                        paddingTop: 16
                    }}>
                        <MiniCartProduct price={450} count={2} sum={900}/>
                        <MiniCartProduct price={450} count={2} sum={900}/>
                        <MiniCartProduct price={450} count={2} sum={900}/>
                        <MiniCartProduct price={450} count={2} sum={900}/>
                        <MiniCartProduct price={450} count={2} sum={900}/>
                        <MiniCartProduct price={450} count={2} sum={900}/>
                        <MiniCartProduct price={450} count={2} sum={900}/>
                        {/*<MiniCartProduct price={450} count={2} sum={900}/>*/}
                        {/*<MiniCartProduct price={450} count={2} sum={900}/>*/}
                        {/*<MiniCartProduct price={450} count={2} sum={900}/>*/}
                        {/*<MiniCartProduct price={450} count={2} sum={900}/>*/}
                        {/*<MiniCartProduct price={450} count={2} sum={900}/>*/}
                    </View>
                    <LineSvg style={{
                        padding: 24
                    }}/>
                        <View style={{
                            flexDirection: 'row',
                            columnGap: 5,
                            paddingBottom: 16
                        }}>
                            <Text style={{
                                fontFamily: 'Gilroy-Regular',
                                fontSize: 16,
                                lineHeight: 18,
                                color: 'rgba(187, 187, 187, 1)'
                            }}>
                                Итого:
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 18,
                                fontFamily: 'Gilroy-Regular',
                                color: theme === 'light' ? 'black' : 'white'
                            }}>
                                1300 руб
                            </Text>
                        </View>
                        <AddToCartBtn />
                    </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )

}

export default CartPageInMenu