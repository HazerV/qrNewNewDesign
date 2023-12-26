import React, {useContext} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Dimensions} from "react-native";
import {PageContext, ThemeContext} from "../Context/Context";
import CornerLeftB from './icons/Corners/CornerLeftB.svg'
import CornerRightW from './icons/Corners/CornerRightW.svg'
import Info from './icons/Info.svg'
import InfoWhite from './icons/InfoWhite.svg'
import Menu from './icons/Menu.svg'
import MenuWhite from './icons/MenuWhite.svg'
import Person from './icons/Person.svg'
import PersonWhite from './icons/PersonWhite.svg'
import HideWithKeyboard from "react-native-hide-with-keyboard";

const Footer = () => {

    const navigation = useNavigation()
    const {theme} = useContext(ThemeContext)

    const styles = {
        container: {
            width: Dimensions.get('window').width,
            height: 60,
            backgroundColor: 'rgba(21, 21, 21, 0.9)',
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
            // marginLeft: 16,
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
            left: -1,
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
    const {route} = useContext(PageContext)

    return (
        <HideWithKeyboard>
        <View>
            <View style={styles.leftCorner}>
                <CornerLeftB/>
            </View>
            <View style={styles.container}>
                <View style={styles.icons}>
                    <View style={styles.place}>
                        <TouchableOpacity
                            hitSlop={{
                                left: 120,
                                right: 30,
                                top: 10,
                                bottom: 10
                            }}
                            onPress={() => {
                            navigation.navigate('Home')
                        }}>
                            <View style={styles.iconFoot }>
                                {
                                    route === 'Home' || route === 'Oferta' || route === 'Contacts' ? (
                                        <InfoWhite />
                                    ) : (
                                        <Info/>
                                    )
                                }
                                <Text style={[styles.footText, {color: route === 'Home' || route === 'Oferta' || route === 'Contacts' ? 'white' : 'rgba(255, 255, 255, 0.5)'}]}>
                                    Инфо
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            hitSlop={{
                                right: 30,
                                left: 30,
                                bottom: 10,
                                top: 10
                            }}
                            onPress={() => {
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
                                <Text style={[styles.footText, {color: route === 'Menu' || route === 'Categories' ? 'white' : 'rgba(255, 255, 255, 0.5)'}]}>
                                    Меню
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            hitSlop={{
                                right: 120,
                                left: 30,
                                top: 10,
                                bottom: 10
                            }}
                            onPress={() => {
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
                    <CornerRightW/>
                </View>
            </View>
        </View>
        </HideWithKeyboard>
    )
}

export default Footer