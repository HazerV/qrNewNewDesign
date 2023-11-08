import React, { useContext, useState } from "react";
import {View, Text, SafeAreaView, ScrollView, Modal, TouchableOpacity, Button, Pressable} from "react-native";
import { ThemeContext } from "../../Context/Context";
import Footer from "../../Footer/Footer";
import ProductItem from "../../ProductItem/ProductItem";
import ModalCart from "../../CartRealise/ModalCart";
import CartButton from "../../CartRealise/CartButton";
import axios from "axios";
import MiniProductCart from "../../ProductItem/MiniProductCart";

const Category = () => {

    const {theme} = useContext(ThemeContext)
    const [visible, setVisible] = useState(false)
    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    const category = 'Брускетты'
    const styles = {
        areaView: {
            backgroundColor: theme === 'dark' ? '#333333' : 'white',
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
            height: 461
        },
        modalName: {
            fontSize: 24,
            lineHeight: 28,
            fontFamily: 'Gilroy-SemiBold',
            paddingTop: 48,
            color: theme === 'light' ? 'black' : 'white'
        }
    }

    return (
        <SafeAreaView style={styles.areaView}>
            <ScrollView>
                <View>
                    <Text style={styles.nameCategory}>
                        {category}
                    </Text>
                    <View style={styles.objects}>
                        <ProductItem name={'Брускетта с икрой'} description={'Икра кеты на французском багете со сливочным маслом'} id={1} sum={450} weight={200} />
                        <ProductItem name={'Брускетта с козьим сыром и тыквой'} description={'Пармская ветчина с сыром креметте, свежим инжиром и кресс-салатом на французскоом багете'} id={2} sum={450} weight={200} />
                        <ProductItem name={'Брускетта с ростбифом'} description={'Ростбиф с чесноком, перцем чили, кедровыми орешками, кресс-салатом, вялеными томатами, крем-чизом'} id={3} sum={450} weight={200} />
                        <ProductItem name={'Брускетта с икрой'} description={'Икра кеты на французском багете со сливочным маслом'} id={1} sum={450} weight={200} />
                        <ProductItem name={'Брускетта с икрой'} description={'Икра кеты на французском багете со сливочным маслом'} id={1} sum={450} weight={200} />
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity onPress={() => {setVisible(true)}}>
                <Modal
                    onRequestClose={hide}
                    transparent={true}
                    visible={visible}
                    animationType='slide'
                >
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
