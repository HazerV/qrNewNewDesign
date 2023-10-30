import React, {useContext} from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import GoHome from "./GoHome/GoHome";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import { ThemeContext } from "../Context/Context";
import CornerLeftB from './icons/Corners/CornerLeftB.svg'
import CornerRightB from './icons/Corners/CornerRightB.svg'
import CornerLeftW from './icons/Corners/CornerLeftW.svg'
import CornerRightW from './icons/Corners/CornerRightW.svg'
import Info from './icons/Info.svg'
import Menu from './icons/Menu.svg'
import Person from './icons/Person.svg'

const Footer = () => {

    const navigation = useNavigation() 
    const {theme} = useContext(ThemeContext)

    const styles = {
        container: {
            width: Dimensions.get('window').width,
            height: 60,
            backgroundColor:'rgba(21, 21, 21, 0.9)' 
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
            justifyContent: 'center'
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
        iconFoot: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    }

    return (
                    <View>
                        <View style={styles.leftCorner}>
                            {
                                theme == 'light' ? (
                                    <CornerLeftW/>
                                ) : (
                                    <CornerLeftB />
                                )
                            }
                        </View>
                        <View style = {styles.container}>
                            <View style={[styles.icons, {marginTop: 16}]}>
                                <View style={{
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    columnGap: 110,
                                    marginTop: -50
                                }}>
                                    <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                                        <View style={styles.iconFoot}>
                                            <Info />
                                            <Text style={styles.footText}>
                                                Инфо
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    {/* <TouchableOpacity onPress={() => {navigation.navigate('')}}> */}
                                        <View style={styles.iconFoot}>
                                            <Menu />
                                            <Text style={styles.footText}>
                                                Меню
                                            </Text>
                                        </View>
                                    {/* </TouchableOpacity> */}
                                    <View style={styles.iconFoot}>
                                        <Person />
                                        <Text style={styles.footText}>
                                            Стол
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rightCorner}>
                                {
                                theme == 'light' ? (
                                    <CornerRightW/>
                                ) : (
                                    <CornerRightW />
                                )
                            }
                            </View>
                        </View>
                        
                    </View>
    )
}



export default Footer