import React, {useCallback, useContext, useState} from "react";
import axios from "axios";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList} from "react-native";
import {ThemeContext, CartContext} from "../Context/Context";
import Counter from "./Counter/Counter";
import Imageee from "./Image.png";
import {ReactNativeZoomableView} from "@openspacelabs/react-native-zoomable-view";


const ProductItem = ({id, name, description, sum, weight, preview}) => {

    const [open, setOpen] = useState(false)
    const {theme} = useContext(ThemeContext)
    const styles = {
        container: {
            width: Dimensions.get('window').width - 60,
            height: 172,
            flexDirection: 'column',
            // position: 'relative',
            display: 'inline-block',
            columnGap: 16,
        },
        name: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            lineHeight: 20,
            width: Dimensions.get('window').width - 120 - 60,
            paddingBottom: 16,
            color: theme === 'light' ? 'black' : 'white',
            flex: 0
        },
        description: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 12,
            lineHeight: 16,
            color: theme === 'light' ? 'black' : 'white',
            marginBottom: 16,
            width: Dimensions.get('window').width - 120 - 60,
        },
        summa: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            lineHeight: 19,
            color: theme === 'light' ? 'black' : 'white'
        },
        weight: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 12,
            lineHeight: 14,
            color: theme === 'light' ? 'black' : 'white'
        },
        viewSec: {
            flexDirection: 'row',
            columnGap: 50,
            width: '40%',
        },
        imgPosititon: {
            top: 0,
            position: 'absolute',
            right: 0
        },
        openImage: {
            width: Dimensions.get('window').width -45,
            height: Dimensions.get('window').width - 60,
            borderRadius: 16
        },
        nonContainer: {
            position: 'relative',
            top: 0,
            right: 0,
            width: Dimensions.get('window').width -45, height: Dimensions.get('window').width - 60,
            borderRadius: 16
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 8,
            marginLeft: 10
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
            <View style={styles.imgPosititon}>
                <View>
                    <TouchableOpacity onPress={() => {
                        open === false ? (
                            setOpen(true)
                        ) : (setOpen(false))
                    }}>
                        {
                            open === false ? (
                                <Image style={styles.image} source={{uri: `${preview}`}}/>
                            ) : (
                                    <View style={styles.nonContainer}>
                                        <Image style={styles.openImage} source={{uri: `${preview}`}}/>
                                    </View>
                            )
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', columnGap: 12, alignItems: 'center'}}>
                <View style={styles.counter}>
                    <Counter/>
                </View>
                <View>
                    <Text style={styles.summa}>
                        {sum} руб
                    </Text>
                    {/*<Text style={styles.weight}>*/}
                    {/*    {weight} гр*/}
                    {/*</Text>*/}
                </View>
            </View>
        </View>
    )
}

export default ProductItem