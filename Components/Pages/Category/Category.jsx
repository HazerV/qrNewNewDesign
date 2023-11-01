import React, { useContext } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Footer from "../../Footer/Footer";
import ProductItem from "../../ProductItem/ProductItem";
import Counter from "../../ProductItem/Counter/Counter";
import { ThemeContext } from "../../Context/Context";
import CartButton from "../../CartRealise/CartButton";

const Category = () => {

    const {theme} = useContext(ThemeContext)
    
    const category = 'Брускетты'

    return (
        <SafeAreaView style={{
            backgroundColor: theme == 'dark' ? '#333333' : 'white',
            alignSelf: 'center'
        }}>
            <ScrollView>
                <View>
                    <Text style={{
                        color: theme == 'light' ? 'black' : 'white',
                        fontFamily: 'Gilroy-Regular',
                        fontSize: 26,
                        lineHeight: 28,
                        paddingTop: 32,
                        alignSelf: 'center'
                    }}>
                        {category}
                    </Text>
                    <View style={{
                        alignItems: 'center',
                        paddingTop: 32,
                        paddingLeft: 16
                    }}>
                        <ProductItem name={'Брускетта'} description={'ауываыфва'} id={1} sum={450} weight={200} />
                        <ProductItem name={'Брускетта'} description={'ауываыфва'} id={2} sum={450} weight={200} />
                        <ProductItem name={'Брускетта'} description={'ауываыфва'} id={3} sum={450} weight={200} />
                        <ProductItem name={'Брускетта'} description={'ауываыфва'} id={4} sum={450} weight={200} />
                        {/*<ProductItem />*/}
                        {/*<ProductItem />*/}
                        {/*<ProductItem />*/}
                        {/*<ProductItem />*/}
                        {/*<ProductItem />*/}
                    </View>

                </View>
            </ScrollView>
            <CartButton />
            <Footer />
        </SafeAreaView>
    )

}

export default Category