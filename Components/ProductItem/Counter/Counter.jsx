import React, {useContext, useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PlusBSvg from '../Counter/PlusB.svg'
import MinusBSvg from '../Counter/MinusB.svg'
import MinusW from '../Counter/MinusW.svg'
import PlusW from '../Counter/PlusW.svg'
import { ThemeContext, CartContext } from "../../Context/Context";
import ProductItem from "../ProductItem";
// import {RNSVGPath, SvgUri} from "react-native-svg";
// import SvgImage from "react-native-svg/lib/typescript/elements/Image";
// import Svg from "react-native-svg/lib/typescript/ReactNativeSVG.web";


const Counter = () => {

    const [ count, setCount ] = useState(0)
    const { theme } = useContext(ThemeContext)
    // const {increment, decrement, cart, setCart} = useContext(CartContext)

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            width: 100,
            height: 50,
            backgroundColor: theme === 'light' ? 'white' : '#333333',
            borderRadius: 14,
            borderColor: count === 0 ? 'rgba(85, 85, 85, 1)' : 'rgba(255, 122, 0, 1)',
            borderWidth: 2,
            alignItems: 'center',
            flexDirection: 'row',
            rowGap: 20,
        },
        countValue: {
            fontSize: 18,
            lineHeight: 20,
            fontFamily: 'Gilroy-Regular',
            color: theme === 'light' ? 'black' : 'white',
        },
        minus: {
            flexDirection: 'row',
            columnGap: 15,
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'rgba(255, 122, 0, 1)',
        }
    })
    return (
        <TouchableOpacity onPress={() => {
            {
                count === 0 ? (
                    setCount(count+1)
                    // console.log(cart),
                ) : null
            }
        }}>
            <View style = {styles.container}>
                {
                    count === 0 ?
                        (
                            <View>
                                <TouchableOpacity onPress={() => {
                                    setCount (count + 1)
                                }}>
                                    <View>
                                        {
                                        theme === 'dark' ? (
                                            <PlusBSvg />
                                            ) : (
                                            <PlusW/>
                                        )
                                    }
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ) 
                        : 
                        (
                            <View style={styles.minus}>
                                        <TouchableOpacity onPress={() => { setCount (count-1)}}>
                                            <View>
                                            {
                                              theme === 'light' ?
                                                (
                                                    <MinusW />
                                                ) : (
                                                    <MinusBSvg/>
                                                )
                                            }
                                            </View>
                                        </TouchableOpacity>

                                        <Text style={styles.countValue}>
                                            {count}
                                        </Text>
                                        {
                                            theme === 'light' ? (
                                                <TouchableOpacity  onPress={() => { setCount (count+1)}}>
                                                    <View style={{
                                                    marginLeft: 5,
                                                        width: 10,
                                                        height: 10
                                                }}>
                                                        <PlusW/>
                                                    </View>
                                                </TouchableOpacity>
                                            ) : (
                                                <TouchableOpacity onPress={() => { setCount (count+1) }}>
                                                    <View style={{
                                                    borderRadius: 2,
                                                    marginLeft: 5 }}>
                                                        <PlusBSvg/>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        }
                            </View>
                        )
                }
            </View>
        </TouchableOpacity>
    )

}

export default Counter