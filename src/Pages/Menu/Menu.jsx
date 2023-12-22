import React, {useContext} from "react";
import {View, Text, SafeAreaView, ScrollView, Dimensions} from "react-native";
import Footer from "../../Components/Footer/Footer";
import { ThemeContext } from "../../Components/Context/Context";
import Categories from "../../Components/Categories/Categories";
import {config} from "../../../config";
const Home = () => {

    const {theme} = useContext(ThemeContext)
    const styles = {
        areaView: {
            backgroundColor: theme === 'dark' ? '#333333' : 'white',
            height: '100%'
        },
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: theme === 'dark' ? '#333333' : 'white',
            alignItems: 'center'
        },
        headName: {
            fontSize: 24,
            lineHeight: 28,
            fontFamily: 'Gilroy-SemiBold',
            color: theme === 'dark' ? 'white' : 'black',
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
            color: theme === 'dark' ? 'white' : 'black',
            justifyContent: 'flex-start',
            paddingTop: 25,
            textAlign: 'left',
            paddingBottom: config.otstupBottom,
            width: Dimensions.get('window').width - 15 - 50
        },
        catPlace: {
            paddingTop: 16,
            width: Dimensions.get('window').width - 15 -30
        }
    }

    return (
        <SafeAreaView style={styles.areaView}>
            <ScrollView>
                <View style={styles.container}>
                        <Text style={styles.headName}>
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
export default Home