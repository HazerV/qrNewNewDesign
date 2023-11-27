import React, {useContext, useState, useEffect} from "react";
import {View, Text, SafeAreaView, ScrollView, Modal, TouchableOpacity, Button, Pressable} from "react-native";
import {ThemeContext, ProductContext} from "../../Components/Context/Context";
import Footer from "../../Components/Footer/Footer";
import ProductItem from "../../Components/ProductItem/ProductItem";
import CartButton from "../../Components/CartComponents/CartModal/CartButton";
import axios from "axios";
import MiniCartProduct from "../../Components/CartComponents/CartModal/MiniCartProduct";
import LineSvg from '../../Components/Images/Line.svg'
import AddToCartBtn from "./AddToCartBtn";

const CategoryPage = (props) => {

    let cat = props.route.params.cat
    const serverUrl = 'https://api.menu.true-false.ru'

    const {Product, setProduct} = useContext(ProductContext)
    const {theme} = useContext(ThemeContext)
    const [visible, setVisible] = useState(false)
    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    const getProduct = () => {
        axios.get(`${serverUrl}/api/${cat.slug}/products`, {headers: {'SubDomain': 'zaryadye'}})
            .then(
                res => {
                    setProduct(res.data.data.products)
                }
            )
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getProduct()
    }, []);
    const styles = {
        areaView: {
            backgroundColor: theme === 'light' ? 'white' : '#333333',
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
            rowGap: 24,
            paddingTop: 32,
            paddingLeft: 16
        },
        modal: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 50,
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
        },
        modalStyle: {
            width: '500',
            height: 800,
            backgroundColor: 'black',
            opacity: 0.6,
        }
    }

    return (
        <SafeAreaView style={[styles.areaView]}>
            <ScrollView>
                <View>
                    <Text style={styles.nameCategory}>
                        {cat.name}
                    </Text>
                    <View style={styles.objects}>
                        {
                            Product.map((prod) => {
                                return (
                                    <ProductItem name={prod.name}
                                                 description={prod.content}
                                                 sum={prod.price} weight={220}
                                                 preview={`${serverUrl}/storage/${prod.preview}`}/>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => { show() }}>
                <Modal
                    onRequestClose={hide}
                    transparent={true}
                    visible={visible}
                    animationType='slide'>
                    {
                        visible === true ? (
                            <View style={styles.modalStyle}>
                            </View>
                        ) : null
                    }
                    {
                        visible === false ? (
                            null
                        ) : (
                            <View style={styles.modal}>
                                <Text style={styles.modalName}>
                                    Корзина
                                </Text>
                                <View>
                                    <MiniCartProduct price={450} count={2} sum={900}/>
                                    <MiniCartProduct price={450} count={2} sum={900}/>
                                    <MiniCartProduct price={450} count={2} sum={900}/>
                                </View>
                                <LineSvg style={{alignSelf: 'center', paddingTop: 24}}/>
                                <View style={styles.sumBlock}>
                                    <Text style={styles.itogText}>
                                        Итого:
                                    </Text>
                                    <Text style={styles.sumCount}>
                                        {' '} 1 350 руб
                                    </Text>
                                </View>
                                <View style={{paddingTop: 16, alignSelf: 'center'}}>
                                    <AddToCartBtn/>
                                </View>
                            </View>
                        )
                    }
                </Modal>
                <CartButton/>
            </TouchableOpacity>
            <Footer/>
        </SafeAreaView>
    )
}

export default CategoryPage