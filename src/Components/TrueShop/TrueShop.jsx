import React, { Component, useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import { ThemeContext } from '../Context/Context';
import TrueShopLight from '../TrueShop/TrueShopLight.svg'
import TrueShopDark from '../TrueShop/TrueShopDark.svg'

const TrueShop = () => {


        const {theme} = useContext(ThemeContext)

        console.log(theme)

        const styles = StyleSheet.create({
            logo: {
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: -30,
                marginTop: 60
            }
        })

        if (theme == 'dark') {
            return (
                <View style = {styles.logo}>
                    <TrueShopDark />
                </View>
            )
        } else {
            return (
                <View style = {styles.logo}>
                    <TrueShopLight />
                </View>
            )
        }

}




export default TrueShop;
