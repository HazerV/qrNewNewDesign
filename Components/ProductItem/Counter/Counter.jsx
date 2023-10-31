import React, {useContext, useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PlusBSvg from '../Counter/PlusB.svg'
import MinusBSvg from '../Counter/MinusB.svg'
import MinusW from '../Counter/MinusW.svg'
import PlusW from '../Counter/PlusW.svg'
import { ThemeContext } from "../../Context/Context";

const Counter = () => {

    const [count, setCount] = useState(0)
    const {theme} = useContext(ThemeContext)


    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            width: 100,
            height: 50,
            backgroundColor: theme == 'light' ? 'white' : '#333333',
            borderRadius: 14,
            borderColor: count == 0 ? 'rgba(85, 85, 85, 1)' : 'rgba(255, 122, 0, 1)',
            borderWidth: 2,
            alignItems: 'center',
            flexDirection: 'row',
            rowGap: 20
        },
        countValue: {
            fontSize: 18,
            lineHeight: 20,
            fontFamily: 'Gilroy-Regular',
            color: theme == 'light' ? 'black' : 'white',
        }
    })



    return (
        <TouchableOpacity onPress={() => {
            {
                count == 0 ? (
                    setCount(count+1)
                ) : (
                    null
                )
            }
        }}>
            <View style = {styles.container}>
                {
                    count == 0 ? 
                        (
                            <View>
                                    
                                            <TouchableOpacity onPress={() => {
                                                setCount (count + 1)
                                            }}>
                                                <View style={{
                                                        // marginLeft: 45
                                                    }}>
                                                    {
                                                    theme == 'dark' ? (
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

                            <View style={{
                                flexDirection: 'row',
                                columnGap: 15,
                                borderRadius: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: 'rgba(255, 122, 0, 1)',
                            }}>

                                    
                                        <TouchableOpacity onPress={() => { setCount (count-1) }}>
                                            <View style={{
                                                width: "100%",
                                            }}>
                                                {
                                              theme == 'light' ? 
                                                (
                                                    <MinusW/>
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
                                        theme == 'light' ? (
                                            <TouchableOpacity  onPress={() => { setCount (count+1) }}>
                                                <View style={{
                                                // width: "100%",
                                                marginLeft: 5
                                            }}>
                                                    <PlusW/>
                                                </View>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => { setCount (count+1) }}>
                                                <View style={{
                                                // width: "100%",
                                                borderRadius: 2,
                                                // borderWidth: 15,
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

export default Counter