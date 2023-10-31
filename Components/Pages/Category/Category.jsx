import React, { useContext } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Footer from "../../Footer/Footer";
import ProductItem from "../../ProductItem/ProductItem";
import Counter from "../../ProductItem/Counter/Counter";
import { ThemeContext } from "../../Context/Context";

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
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )

}

export default Category