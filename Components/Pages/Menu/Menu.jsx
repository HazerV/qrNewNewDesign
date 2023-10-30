import React, {useContext} from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Context, ThemeContext } from "../../Context/Context";
import Categories from "../../Categories/Categories";

const Home = () => {

    const {theme} = useContext(ThemeContext)
    const styles = {
        container: {
            width: '100%',
            height: '90%',
            backgroundColor: theme == 'light' ? 'white' : 'black'
        }
    }
    console.log(theme)

    return (
        <SafeAreaView style={{
            backgroundColor: theme == 'dark' ? 'black' : 'white',
            height: '100%'
            }}>
            <ScrollView>
                <View style={styles.container}>
                        <Header />
                    <View>
                        <Categories/>
                        <Categories/>
                        <Categories/>
                        <Categories/>
                        <Categories/>
                        <Categories/>
                    </View>
                </View>
            </ScrollView>
            <Footer/>
        </SafeAreaView>
    ) 

}

export default Home