import React, { useContext, useState } from "react";
import {View, Text, SafeAreaView, ScrollView, Modal, TouchableOpacity, Button, Pressable} from "react-native";
import { ThemeContext } from "../../Components/Context/Context";
import Footer from "../../Components/Footer/Footer";
import ProductItem from "../../Components/ProductItem/ProductItem";
import CartButton from "../../Components/CartRealise/CartButton";
import axios from "axios";
import MiniProductCart from "../../Components/ProductItem/MiniProductCart";

const Category = () => {

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
            backgroundColor: color,
            alignSelf: 'center'
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
            bottom: 55,
            alignItems: 'center',
            width: '100%',
            backgroundColor: theme === 'dark' ? 'rgba(51, 51, 51, 1)' : 'white',
            height: 461,
            borderRadius: 16
        },
        modalName: {
            fontSize: 24,
            lineHeight: 28,
            fontFamily: 'Gilroy-SemiBold',
            paddingTop: 48,
            color: theme === 'light' ? 'black' : 'white',
            paddingBottom: 16
        }
    }

    const array = {
        prod1: {
            id: 1,
            name: 'Брускетта с козьим сыром и тыквой',
            description: 'Ростбиф с чесноком, перцем чили, кедровыми орешками, кресс-салатом, вялеными томатами, крем-чизом',
            sum: 450,
            weight: 200
        }
    }

    return (
        <SafeAreaView style={[styles.areaView]}>
            <ScrollView>
                <View>
                    <Text style={styles.nameCategory}>
                        {category}
                    </Text>
                    <View style={styles.objects}>
                        <ProductItem name={'Брускетта с икрой'} description={'Икра кеты на французском багете со сливочным маслом'} id={1} sum={450} weight={200} />
                        {/*<ProductItem name={'Брускетта с козьим сыром и тыквой'} description={'Пармская ветчина с сыром креметте, свежим инжиром и кресс-салатом на французскоом багете'} id={2} sum={450} weight={200} />*/}
                        {/*<ProductItem name={'Брускетта с ростбифом'} description={'Ростбиф с чесноком, перцем чили, кедровыми орешками, кресс-салатом, вялеными томатами, крем-чизом'} id={3} sum={450} weight={200} />*/}
                        {/*<ProductItem name={'Брускетта с икрой'} description={'Икра кеты на французском багете со сливочным маслом'} id={1} sum={450} weight={200} />*/}
                        {/*<ProductItem name={'Брускетта с икрой'} description={'Икра кеты на французском багете со сливочным маслом'} id={1} sum={450} weight={200} />*/}
                        <ProductItem name={array.prod1.name} description={array.prod1.description} sum={array.prod1.sum} weight={array.prod1.weight} />
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
                        visible === false ? (
                            <View>
                                <Text> nothing </Text>
                            </View>
                        ) : (
                            <View style={styles.modal}>
                                <Text style = {styles.modalName}>
                                    Корзина
                                </Text>
                                <MiniProductCart />
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

export default Category