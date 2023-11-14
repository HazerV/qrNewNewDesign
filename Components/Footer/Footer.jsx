import React, {useContext, useRef, useState} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {NavigationContainer, useNavigation, useNavigationContainerRef} from "@react-navigation/native";
import {Dimensions} from "react-native";
import {PageContext, ThemeContext} from "../Context/Context";
import CornerLeftB from './icons/Corners/CornerLeftB.svg'
import CornerLeftW from './icons/Corners/CornerLeftW.svg'
import CornerRightW from './icons/Corners/CornerRightW.svg'
import Info from './icons/Info.svg'
import InfoWhite from './icons/InfoWhite.svg'
import Menu from './icons/Menu.svg'
import MenuWhite from './icons/MenuWhite.svg'
import Person from './icons/Person.svg'
import PersonWhite from './icons/PersonWhite.svg'

const Footer = () => {

    const navigation = useNavigation()
    const {theme} = useContext(ThemeContext)

    const styles = {
        container: {
            width: Dimensions.get('window').width,
            height: 60,
            backgroundColor: 'rgba(21, 21, 21, 0.9)'
        },
        AreaView: {
            minHeight: 100,
        },
        ScrollView: {
            minHeight: 30,
        },
        icons: {
            display: 'flex',
            flexDirection: 'row',
            columnGap: 8,
            marginLeft: 16,
            position: 'absolute', left: 0, right: 0, bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16
        },
        rightCorner: {
            right: 0,
            position: 'absolute',
            top: -30
        },
        leftCorner: {
            left: 0,
            position: 'absolute',
            top: -30,
            opacity: 90
        },
        footText: {
            fontFamily: 'Gilroy-Regular',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: 12,
        },
        footTextWhite: {
            fontFamily: 'Gilroy-Regular',
            color: 'rgba(255, 255, 255, 1)',
            fontSize: 12
        },
        iconFoot: {
            flexDirection: 'column',
            alignItems: 'center'
        },
        place: {
            alignItems: 'center',
            flexDirection: 'row',
            columnGap: 60,
            marginTop: -55
        }
    }
    const {route, setRoute} = useContext(PageContext)
    console.log(route)

    return (
        <View>
            <View style={styles.leftCorner}>
                {
                    theme === 'light' ? (
                        <CornerLeftW/>
                    ) : (
                        <CornerLeftB/>
                    )
                }
            </View>
            <View style={styles.container}>
                <View style={styles.icons}>
                    <View style={styles.place}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Home')
                        }}>
                            <View style={styles.iconFoot }>
                                {
                                    route === 'Home' ? (
                                        <InfoWhite />
                                    ) : (
                                        <Info/>
                                    )
                                }
                                <Text style={[styles.footText, {color: route === 'Home' ? 'white' : 'rgba(255, 255, 255, 0.5)'}]}>
                                    Инфо
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Menu')
                        }}>
                            <View style={styles.iconFoot}>
                                {
                                    route === 'Menu' || route === 'Categories' ? (
                                        <MenuWhite />
                                    ) : (
                                        <Menu/>
                                    )
                                }
                                <Text style={[styles.footText, {color: route === 'Menu' ? 'white' : 'rgba(255, 255, 255, 0.5)'}]}>
                                    Меню
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('CartPage')
                        }}>
                            <View style={styles.iconFoot}>
                                {
                                    route === 'CartPage' || route === 'SplitPay' ? (
                                        <PersonWhite />
                                    ) : (
                                        <Person />
                                    )
                                }
                                <Text style={[styles.footText, {color: route === 'CartPage' || route ===  'SplitPay' ? 'white' : 'rgba(255, 255, 255, 0.5)'}]}>
                                    Стол
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rightCorner}>
                    {
                        theme === 'light' ? (
                            <CornerRightW/>
                        ) : (
                            <CornerRightW/>
                        )
                    }
                </View>
            </View>
        </View>
    )
}

export default Footer