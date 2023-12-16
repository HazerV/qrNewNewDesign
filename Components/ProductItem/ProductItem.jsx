import React, {useContext, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions} from "react-native";
import {ThemeContext} from "../Context/Context";
import Counter from "./Counter/Counter";
import {config} from "../../config";
import 'react-native-gesture-handler'
import {
    LongPressGestureHandler,
    GestureHandlerRootView,
    State,
    Gesture
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import ZoomFunction from "./Zoom/ZoomFunction";

const ProductItem = ({id, name, description, sum, weight, preview}) => {

    const [open, setOpen] = useState(false)
    const {theme} = useContext(ThemeContext)
    let styles = {
        container: {
            width: Dimensions.get('window').width - 60,
            height: 172,
            flexDirection: 'column',
            display: 'inline-block',
            columnGap: 16,
            paddingBottom: 16
        },
        counterBlock: {display: 'flex', flexDirection: 'row', columnGap: 12, alignItems: 'center', paddingBottom: 16},
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
            color: theme === 'light' ? 'black' : 'white',
            paddingBottom: 4
        },
        weight: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 12,
            lineHeight: 14,
            color: theme === 'dark' ? '#BBBBBB' : '#555555',
        },
        viewSec: {
            flexDirection: 'row',
            columnGap: 50,
            width: '40%',
        },
        imgPosititon: {
            top: 0,
            position: 'absolute',
            right: 0,
            zIndex: -1
        },
        openImage: {
            width: Dimensions.get('window').width - 45,
            height: Dimensions.get('window').width - 60,
            borderRadius: 16
        },
        nonContainer: {
            position: 'relative',
            top: 0,
            right: 0,
            // width: Dimensions.get('window').width - 45,
            // height: Dimensions.get('window').width - 60,
            borderRadius: 16,
            overflow: 'hidden'
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 8,
            marginLeft: 10,
        }
    }
    if (open === true) {
        styles = {
            container: {
                width: Dimensions.get('window').width - 60,
                height: open === false ? 172 : Dimensions.get('window').width - 60,
                flexDirection: 'column',
                // display: 'inline-block',
                columnGap: 16,
                justifyContent: 'flex-end',
                paddingBottom: 16
            },
            counterBlock: {
                display: 'flex',
                flexDirection: 'row',
                columnGap: 12,
                alignItems: 'center',
                paddingBottom: 16
            },
            name: {
                position: 'absolute',
                top: 0,
                fontFamily: 'Gilroy-Regular',
                fontSize: 16,
                lineHeight: 20,
                width: Dimensions.get('window').width - 120 - 60,
                color: config.textColorOnImage,
            },
            description: {
                fontFamily: 'Gilroy-Regular',
                fontSize: 12,
                lineHeight: 16,
                marginBottom: 16,
                width: Dimensions.get('window').width - 120 - 60,
            },
            summa: {
                fontFamily: 'Gilroy-Regular',
                fontSize: 16,
                lineHeight: 19,
                color: config.textColorOnImage,
                paddingBottom: 4
            },
            weight: {
                fontFamily: 'Gilroy-Regular',
                fontSize: 12,
                lineHeight: 14,
                color: config.textColorOnImage
            },
            viewSec: {
                flexDirection: 'row',
                columnGap: 50,
                width: '40%',
            },
            imgPosititon: {
                top: -16,
                position: 'absolute',
                right: 0,
                zIndex: -1,
            },
            openImage: {
                width: Dimensions.get('window').width - 45,
                height: Dimensions.get('window').width - 60,
                borderRadius: 16,
            },
            nonContainer: {
                position: 'relative',
                top: 0,
                right: 0,
                // width: Dimensions.get('window').width - 20,
                // height: Dimensions.get('window').width - 60,
                borderRadius: 16,
                overflow: 'hidden'
            },
            image: {
                width: 100,
                height: 100,
                borderRadius: 8,
                marginLeft: 10
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            {
                open === false ? (
                    <Text style={styles.description}>
                        {description}
                    </Text>
                ) : (
                    null
                )
            }
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
                                    <TouchableOpacity onPress={() => {
                                        setOpen(false)
                                    }} activeOpacity={1}>
                                        <ZoomFunction>
                                            <Image style={styles.openImage} source={{uri: `${preview}`}}/>
                                        </ZoomFunction>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.counterBlock}>
                <View style={styles.counter}>
                    <Counter/>
                </View>
                <View>
                    <Text style={styles.summa}>
                        {sum} руб
                    </Text>
                    <Text style={styles.weight}>
                        {weight} гр
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default ProductItem