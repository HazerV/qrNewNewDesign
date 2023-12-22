import React, {useContext, useState, useEffect} from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Dimensions,
    StatusBar,
    StyleSheet
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
import Modal from "react-native-modal";

const CategoryPage = (props) => {

    const show = () => setVisible(true)
    const hide = () => setVisible(false)
    const {theme} = useContext(ThemeContext)
    const [visible, setVisible] = useState(false)

    let cat = props.route.params.cat
    const serverUrl = config.getProductUrl
    const {Product, setProduct} = useContext(ProductContext)

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
        <SafeAreaView style={{
            backgroundColor: color,
            alignSelf: 'center'
        }}>
            <StatusBar/>
            <ScrollView scrollEnabled={scrollEnabled}>
                <View style={{paddingBottom: config.otstupBottom}}>
                    <Text style={[styles.nameCategory, {color: dynamicStyles.color}]}>
                        {cat.name}
                    </Text>
                    <View style={styles.objects}>
                        {
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
                            })
                        }
                    </View>
                </View>
            </ScrollView>
            <Modal
                deviceHeight={Dimensions.get('window').height - 460}
                deviceWidth={Dimensions.get('window').width}
                onBackdropPress={hide}
                isVisible={visible}
            >
                <View style={[styles.modal, {backgroundColor: dynamicStyles.bgColor}]}>
                    <Text style={[styles.modalName, {color: dynamicStyles.color}]}>
                        Корзина
                    </Text>
                    <ScrollView>
                        <View style={{alignItems: 'center'}}>
                            <MiniCartProduct price={450} count={2} sum={900}/>
                            <MiniCartProduct price={450} count={2} sum={900}/>
                            <MiniCartProduct price={450} count={2} sum={900}/>
                            <MiniCartProduct price={450} count={2} sum={900}/>
                            <MiniCartProduct price={450} count={2} sum={900}/>
                            <MiniCartProduct price={450} count={2} sum={900}/>
                            <MiniCartProduct price={450} count={2} sum={900}/>
                        </View>
                    </ScrollView>
                    <LineSvg style={{alignSelf: 'center', paddingTop: 25}}/>
                    <View style={styles.sumBlock}>
                        <Text style={styles.itogText}>
                            Итого:
                        </Text>
                        <Text style={styles.sumCount}>
                            {' '} 1 350 руб
                        </Text>
                    </View>
                    <View style={{alignSelf: 'center', paddingBottom: 16}}>
                        <AddToCartBtn/>
                    </View>
                </View>
            </Modal>
            <CartButton onPress={show}/>

            <Footer/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    areaView: {},
    nameCategory: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 24,
        lineHeight: 30,
        paddingTop: config.otstupTop,
        alignSelf: 'center',
    },
    objects: {
        alignItems: 'center',
        rowGap: 24,
        paddingTop: 32,
        paddingLeft: 16,
        paddingBottom: config.otstupBottom
    },
    modal: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 37,
        width: '100%',
        height: 460,
        borderRadius: 16,
    },
    modalName: {
        fontSize: 24,
        lineHeight: 28,
        fontFamily: 'Gilroy-SemiBold',
        paddingTop: 48,
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