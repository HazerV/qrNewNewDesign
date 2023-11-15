import React, { useContext, useState } from "react";
import {View, Text, SafeAreaView, ScrollView, Modal, TouchableOpacity, Button, Pressable} from "react-native";
import { ThemeContext } from "../../Components/Context/Context";
import Footer from "../../Components/Footer/Footer";
import ProductItem from "../../Components/ProductItem/ProductItem";
import CartButton from "../../Components/CartComponents/CartModal/CartButton";
import axios from "axios";
import MiniCartProduct from "../../Components/CartComponents/CartModal/MiniCartProduct";
import LineSvg from '../../Components/Images/Line.svg'
import AddToCartBtn from "./AddToCartBtn";

const CategoryPage = () => {

    const {theme} = useContext(ThemeContext)
    const [visible, setVisible] = useState(false)
    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    let color = 'black'
    let textColor = 'black'
    if (theme === 'light' && visible === true) {
        color = 'rgba(21, 21, 21, 0.5)'
        textColor = 'rgba(21, 21, 21, 1)'
    }
    if (theme === 'light' && visible === false) {
        color = 'white'
    }
    if (theme === 'dark' && visible === true) {
        color = 'rgba(21, 21, 21, 1)'
    }
    if (theme === 'dark' && visible === false) {
        color = 'rgb(60, 60, 60)'
    }

    const category = 'Брускетты'
    const styles = {
        areaView: {
            backgroundColor: theme === 'light' ? 'white' : '21, 21, 21, 1',
            alignSelf: 'center',
        },
        nameCategory: {
            color: theme === 'light' ? 'black' : 'white',
            fontFamily: 'Gilroy-SemiBold',
            fontSize: 24,
            lineHeight: 30,
            paddingTop: 32,
            alignSelf: 'center',
        },
        objects: {
            alignItems: 'center',
            paddingTop: 32,
            paddingLeft: 16
        },
        modal: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 60,
            width: '100%',
            backgroundColor: theme === 'dark' ? 'rgba(51, 51, 51, 1)' : 'white',
            height: 460,
            borderRadius: 16,

        },
        modalName: {
            fontSize: 24,
            lineHeight: 28,
            fontFamily: 'Gilroy-SemiBold',
            paddingTop: 48,
            color: theme === 'light' ? 'black' : 'white',
            paddingBottom: 16,
            alignSelf: 'center'
        },
        itogText: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            color: "rgba(187, 187, 187, 1)",
            lineHeight: 20,
            alignSelf: 'center'
        },
        sumCount: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            color: "rgba(187, 187, 187, 1)",
            lineHeight: 20
        },
        sumBlock: {
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 16
        }
    }



    // console.log(array)

    return (
        <SafeAreaView style={[styles.areaView]}>
            <ScrollView>
                <View>
                    <Text style={styles.nameCategory}>
                        {category}
                    </Text>
                    <View style={styles.objects}>
                        <ProductItem name={'Брускетта с ростбифом'} description={'Ростбиф с чесноком, перцем чили, кедровыми орешками, кресс-салатом, вялеными томатами, крем-чизом'} sum={450} weight={220}/>
                        <ProductItem name={'Брускетта с ростбифом'} description={'Ростбиф с чесноком, перцем чили, кедровыми орешками, кресс-салатом, вялеными томатами, крем-чизом'} sum={450} weight={220}/>
                        <ProductItem name={'Брускетта с ростбифом'} description={'Ростбиф с чесноком, перцем чили, кедровыми орешками, кресс-салатом, вялеными томатами, крем-чизом'} sum={450} weight={220}/>
                        <ProductItem name={'Брускетта с ростбифом'} description={'Ростбиф с чесноком, перцем чили, кедровыми орешками, кресс-салатом, вялеными томатами, крем-чизом'} sum={450} weight={220}/>
                        <ProductItem name={'Брускетта с ростбифом'} description={'Ростбиф с чесноком, перцем чили, кедровыми орешками, кресс-салатом, вялеными томатами, крем-чизом'} sum={450} weight={220}/>
                    </View>
                </View>
            </ScrollView>


            <TouchableOpacity onPress={() => {setVisible(true)}}>
                <Modal
                    onRequestClose={hide}
                    transparent={true}
                    visible={visible}
                    animationType='slide' >
                    {
                        visible === true ? (
                            <View style={{
                                width: '500',
                                height: 838,
                                backgroundColor: 'black',
                                opacity: 0.8,
                            }}>
                            </View>
                        ) : null
                    }
                    {
                        visible === false ? (
                            <View>
                                <Text> nothing </Text>
                            </View>
                        ) : (
                            <View style={styles.modal}>
                                <Text style = {styles.modalName}>
                                    Корзина
                                </Text>
                                <View>
                                    <MiniCartProduct price={450} count={2} sum={900} />
                                    <MiniCartProduct price={450} count={2} sum={900} />
                                    <MiniCartProduct price={450} count={2} sum={900} />
                                </View>
                                <LineSvg style={{alignSelf: 'center', paddingTop: 24}} />
                                <View style={styles.sumBlock}>
                                    <Text style={styles.itogText}>
                                        Итого:
                                    </Text>
                                    <Text style={styles.sumCount}>
                                        {' '} 1 350 руб
                                    </Text>
                                    </View>
                                    <View style={{ paddingTop: 16, alignSelf: 'center'}}>
                                        <AddToCartBtn/>
                                    </View>
                                </View>
                            )
                        }
                    </Modal>
                <CartButton />
             </TouchableOpacity>
            <Footer />
        </SafeAreaView>
    )
}

export default CategoryPage