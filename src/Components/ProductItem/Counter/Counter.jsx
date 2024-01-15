import React, {useContext, useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import PlusBSvg from '../Counter/PlusB.svg'
import MinusBSvg from '../Counter/MinusB.svg'
import MinusW from '../Counter/MinusW.svg'
import PlusW from '../Counter/PlusW.svg'
import {ThemeContext} from "../../Context/Context";
import {config} from "../../../../config";

const Counter = (q) => {

    const [count, setCount] = useState(0)
    const {theme} = useContext(ThemeContext)
    const dynamicStyles = {
        borderColor: count === 0 ? config.accentColorNonActive : config.accentColor,
        bgColor: theme === 'light' ? 'white' : config.buttonBackgroundDark,
        textColor: theme === 'light' ? 'black' : 'white'
    }

    q = count
    console.log(q)
    return (
        <TouchableOpacity onPress={() => {
            {
                count === 0 ? (
                    setCount(q + 1)
                ) : null
            }
        }}>
            <View style={[styles.container, {
                borderColor: dynamicStyles.borderColor,
                backgroundColor: dynamicStyles.bgColor
            }]}>
                {
                    count === 0 ?
                        (
                            <View>
                                <TouchableOpacity onPress={() => {
                                    setCount(q + 1)
                                }}
                                hitSlop={15}>
                                    <View>
                                        {
                                            theme === 'dark' ? (
                                                <PlusBSvg/>
                                            ) : (
                                                <PlusW/>
                                            )
                                        }
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={styles.minus}>
                                <TouchableOpacity onPress={() => {
                                    setCount(q - 1)
                                }} hitSlop={16}>
                                    <View>
                                        {
                                            theme === 'light' ?
                                                (
                                                    <MinusW/>
                                                ) : (
                                                    <MinusBSvg/>
                                                )
                                        }
                                    </View>
                                </TouchableOpacity>
                                <Text style={[styles.countValue, {
                                    color: dynamicStyles.textColor
                                }]}>
                                    {q}
                                </Text>
                                {
                                    theme === 'light' ? (
                                        <TouchableOpacity onPress={() => {
                                            setCount(q + 1)
                                        }} hitSlop={18}>
                                            <View style={{
                                                marginLeft: 5,
                                                width: 10,
                                                height: 10
                                            }}>
                                                <PlusW/>
                                            </View>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={() => {
                                            setCount(q + 1)
                                        }} hitSlop={18}>
                                            <View style={{
                                                borderRadius: 2,
                                                marginLeft: 5
                                            }}>
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

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: 100,
        height: 50,
        borderRadius: 14,
        borderWidth: 2,
        alignItems: 'center',
        flexDirection: 'row',
        rowGap: 20,
    },
    countValue: {
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'Gilroy-Regular',
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

export default Counter