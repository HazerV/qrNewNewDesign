import React, {useContext, useState, useEffect} from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Dimensions,
    StatusBar,
    Modal,
    StyleSheet, ActivityIndicator, TouchableOpacity, Touchable, Button
} from "react-native";
import {ThemeContext, ProductContext} from "../../Components/Context/Context";
import Footer from "../../Components/Footer/Footer";
import ProductItem from "../../Components/ProductItem/ProductItem";
import CartButton from "../../Components/CartComponents/CartModal/CartButton";
import axios from "axios";
import MiniCartProduct from "../../Components/CartComponents/CartModal/MiniCartProduct";
import LineSvg from '../../Components/Images/Line.svg'
import AddToCartBtn from "./AddToCartBtn";
import {config} from "../../../config";
import {SafeAreaProvider} from "react-native-safe-area-context";

const CategoryPage = (props) => {

    const show = () => setVisible(true)
    const hide = () => setVisible(false)
    const {theme} = useContext(ThemeContext)
    const [visible, setVisible] = useState(false)

    let cat = props.route.params.cat
    const serverUrl = config.getProductUrl
    const {Product, setProduct} = useContext(ProductContext)
    const [loading, setLoading] = useState(false)
    const getProduct = () => {
        setLoading(true)
        axios.get(`${serverUrl}/api/${cat.slug}/products`, {headers: {'SubDomain': 'zaryadye'}})
            .then(
                res => {
                    setProduct(res.data.data.products)
                    setLoading(false)
                }
            )
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }
    useEffect(() => {
        getProduct()
    }, []);
    let color = 'white'
    if (theme === 'light') {
        color = 'white'
    }
    if (theme === 'dark') {
        color = '#333333'
    }
    const dynamicStyles = {
        color: theme === 'light' ? 'black' : 'white',
        bgColor: theme === 'dark' ? 'rgba(51, 51, 51, 1)' : 'white',
    }
    const [scrollEnabled, setScrollEnabled] = useState(true);
    return (

        <SafeAreaView style={{backgroundColor: color, alignSelf: 'center'}}>
            <ScrollView>
                <View style={config.otstupBottom}>
                    <Text style={[styles.nameCategory, {color: dynamicStyles.color}]}>
                        {cat.name}
                    </Text>
                    <View style={styles.objects}>
                        {
                            loading === false ? (
                                Product.map((prod) => {
                                        return (
                                            <ProductItem
                                                key={prod.id}
                                                scrollEnabled={scrollEnabled}
                                                setScrollEnabled={setScrollEnabled}
                                                name={prod.name}
                                                description={prod.content}
                                                sum={prod.price}
                                                weight={220}
                                                preview={`${serverUrl}/storage/${prod.preview}`}/>
                                        )
                                    }
                                )
                            ) : (
                                loading &&
                                <ActivityIndicator color={config.accentColor} animating={true} style={styles.preload}/>
                            )
                        }
                    </View>
                </View>
            </ScrollView>
            <Modal
                onRequestClose={hide}
                transparent={true}
                visible={visible}
            >
                {
                    visible === true ? (
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <View style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'black',
                                opacity: 0.6,
                                bottom: 75
                            }}>
                            </View>
                        </TouchableOpacity>
                    ) : null
                }
                {
                    visible === false ? (
                        <View>
                            <Text> nothing </Text>
                        </View>
                    ) : (
                        <View style={[styles.modal, {backgroundColor: dynamicStyles.bgColor}]}>
                            <Text style={[styles.modalName, {color: dynamicStyles.color}]}>
                                Корзина
                            </Text>
                            <ScrollView>
                                <View style={{
                                    rowGap: 16
                                }}>
                                    <MiniCartProduct price={450} count={2} sum={900}/>
                                    <MiniCartProduct price={450} count={2} sum={900}/>
                                    <MiniCartProduct price={450} count={2} sum={900}/>
                                    <MiniCartProduct price={450} count={2} sum={900}/>
                                    <MiniCartProduct price={450} count={2} sum={900}/>
                                    <MiniCartProduct price={450} count={2} sum={900}/>
                                    <MiniCartProduct price={450} count={2} sum={900}/>
                                    <MiniCartProduct price={450} count={2} sum={900}/>
                                    <MiniCartProduct price={450} count={2} sum={900}/>
                                </View>
                            </ScrollView>
                            <LineSvg style={{alignSelf: 'center'}}/>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                paddingTop: 16
                            }}>
                                <Text style={{
                                    fontFamily: 'Gilroy-Regular',
                                    fontSize: 16,
                                    color: "rgba(187, 187, 187, 1)",
                                    lineHeight: 20,
                                    alignSelf: 'center'
                                    // padding: 16
                                }}>
                                    Итого:
                                </Text>
                                <Text style={{
                                    fontFamily: 'Gilroy-Regular',
                                    fontSize: 16,
                                    color: "rgba(187, 187, 187, 1)",
                                    lineHeight: 20
                                }}>
                                    {' '} 1 350 руб
                                </Text>
                            </View>
                            <View style={{
                                // paddingLeft: 72,
                                paddingTop: 16,
                                paddingBottom: 16
                            }}>
                                <AddToCartBtn/>
                            </View>
                        </View>
                    )
                }
            </Modal>
            <CartButton onPress={show}/>
            <Footer/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    nameCategory: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 24,
        lineHeight: 30,
        paddingTop: config.otstupTop,
        alignSelf: 'center',
    },
    preload: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingTop: 300,
        alignItems: 'center'
    },
    objects: {
        alignItems: 'center',
        rowGap: 24,
        columnGap: 20,
        display: "flex",
        paddingTop: 32,
        paddingBottom: config.otstupBottom
    },
    modal: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 60,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(51, 51, 51, 1)',
        height: Dimensions.get('window').height - 60 - 60,
        borderRadius: 16,
    },
    modalName: {
        fontSize: 24,
        lineHeight: 28,
        fontFamily: 'Gilroy-SemiBold',
        paddingTop: 48,
        paddingBottom: 16,
        alignSelf: 'center',
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
        lineHeight: 20,
    },
    sumBlock: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        paddingBottom: 9

    },
    modalStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 460,
        backgroundColor: 'black',
        opacity: 0.6,
    }
})

export default CategoryPage