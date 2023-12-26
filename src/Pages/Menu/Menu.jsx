import React, {useContext} from "react";
import {View, Text, SafeAreaView, ScrollView, Dimensions, StyleSheet} from "react-native";
import Footer from "../../Components/Footer/Footer";
import { ThemeContext } from "../../Components/Context/Context";
import Categories from "../../Components/Categories/Categories";
import {config} from "../../../config";
const Home = () => {

    const {theme} = useContext(ThemeContext)
    const dynamicStyles = {
        bgColor: theme === 'dark' ? '#333333' : 'white',
        textColor: theme === 'dark' ? 'white' : 'black'
    }

    return (
        <SafeAreaView style={{
            backgroundColor: theme === 'dark' ? '#333333' : 'white',
            height: '100%'
        }}>
            <ScrollView>
                <View style={[styles.container, {backgroundColor: dynamicStyles.bgColor}]}>
                        <Text style={[styles.headName, {color: dynamicStyles.textColor}]}>
                            Меню
                        </Text>
                    <View style={styles.catPlace}>
                        <Categories/>
                    </View>
                </View>
            </ScrollView>
            <Footer/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        // height: '100%',
        alignItems: 'center'
    },
    headName: {
        fontSize: 24,
        lineHeight: 28,
        fontFamily: 'Gilroy-SemiBold',
        justifyContent: 'center',
        textAlign: 'center',
        width: '90%',
        fontWeight: 600,
        paddingTop: config.otstupTop,
    },
    attention: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Gilroy-Regular',
        justifyContent: 'flex-start',
        paddingTop: 25,
        textAlign: 'left',
        paddingBottom: config.otstupBottom,
        width: Dimensions.get('window').width - 15 - 50
    },
    catPlace: {
        paddingTop: 16,
        // width: Dimensions.get('window').width
        flex: 1
    }
})

export default Home