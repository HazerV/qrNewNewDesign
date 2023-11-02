import React, { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { ThemeContext } from "../../Context/Context";
import Footer from "../../Footer/Footer";
import ProductItem from "../../ProductItem/ProductItem";
import ModalCart from "../../CartRealise/ModalCart";

const Category = () => {

    const {theme} = useContext(ThemeContext)

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
            <Footer />
        </SafeAreaView>
    )

}

export default Category
