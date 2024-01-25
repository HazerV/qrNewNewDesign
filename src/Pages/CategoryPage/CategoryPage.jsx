import React, {useContext, useState, useEffect} from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Dimensions,
    StyleSheet,
    ActivityIndicator
} from "react-native";
import {ThemeContext, ProductContext, CartContext} from "../../Components/Context/Context";
import Footer from "../../Components/Footer/Footer";
import ProductItem from "../../Components/ProductItem/ProductItem";
import CartButton from "../../Components/CartComponents/CartModal/CartButton";
import axios from "axios";
import {config} from "../../../config";
import ApiService from "../../Components/ApiService/ApiService";

const CategoryPage = (props) => {

    let cat = props.route.params.cat
    const {cartId, price, sumQuantity} = useContext(CartContext)
    console.log('St', cartId)
    const {theme} = useContext(ThemeContext)
    const serverUrl = config.getProductUrl
    const {Product, setProduct} = useContext(ProductContext)
    const [loading, setLoading] = useState(false)

    const getProduct = () => {
        setLoading(true)
        axios.get(`${serverUrl}/api/${cat.slug}/products`, {headers: {'SubDomain': 'zaryadye'}})
            .then(
                res => {
                    setProduct(res.data.data.products)
                    setLoading(false) })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }
    useEffect(() => {
        getProduct()
    }, []);
    let bgColor = 'white'
    if (theme === 'light') {
        bgColor = 'white'
    }
    if (theme === 'dark') {
        bgColor = '#333333'
    }
    const dynamicStyles = {
        color: theme === 'light' ? 'black' : 'white',
        bgColor: theme === 'dark' ? 'rgba(51, 51, 51, 1)' : 'white',
    }
    const [scrollEnabled, setScrollEnabled] = useState(true);

    return (
        <SafeAreaView style={{backgroundColor: bgColor, alignSelf: 'center'}}>
            <ScrollView>
                <View style={{paddingBottom: config.otstupBottom}}>
                    <Text style={[styles.nameCategory, {color: dynamicStyles.color}]}>
                        {cat.name}
                    </Text>
                    <View style={styles.objects}>
                        {
                            loading === false ? (
                                Product.map((prod) => {
                                        return (
                                            <ProductItem
                                                scrollEnabled={scrollEnabled}
                                                setScrollEnabled={setScrollEnabled}
                                                id={prod.id}
                                                name={prod.name}
                                                description={prod.content}
                                                sum={prod.price}
                                                weight={220}
                                                preview={prod.preview ? `${serverUrl}/storage/${prod.preview}` : null}
                                            />
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
            {
                price !== 0 ? (
                    <CartButton sum={price} quantity={sumQuantity}/>
                ) : (
                    null
                )
            }
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
        height: Dimensions.get('window').height,
        borderRadius: 16,

    },
    modalName: {
        fontSize: 24,
        lineHeight: 28,
        fontFamily: 'Gilroy-SemiBold',
        paddingTop: 100,
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
        height: Dimensions.get('window').height,
        backgroundColor: 'black',
        opacity: 0.6,
    }
})

export default CategoryPage