import React, {useContext, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions} from "react-native";
import {ThemeContext} from "../Context/Context";
import Counter from "./Counter/Counter";
import {config} from "../../../config";
import 'react-native-gesture-handler'
import {
    LongPressGestureHandler,
    GestureHandlerRootView,
    State,
    Gesture
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import ZoomFunction from "./Zoom/ZoomFunction";

const ProductItem = ({ name, description, sum, weight, preview }) => {

    const [open, setOpen] = useState(false)
    const {theme} = useContext(ThemeContext)
    let styles = {
        container: {
            width: Dimensions.get('window').width -20,
            // height: 172,
            flexDirection: 'column',
            display: 'inline-block',
        },
        counterBlock: {
            display: 'flex',
            flexDirection: 'row',
            columnGap: 12,
            // paddingBottom: 16
            alignItems: 'center'
        },
        name: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            lineHeight: 20,
            width: Dimensions.get('window').width - 120 - 60,
            paddingBottom: 16,
            color: theme === 'light' ? 'black' : 'white',
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
            lineHeight: 18,
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
            // bottom: 0,
            right: 0,
            zIndex: -1,
            borderRadius: 16
        },
        openImage: {
            width: 550,
            height: 600,
            borderRadius: 16
        },
        nonContainer: {
            position: 'relative',
            top: 0,
            right: 0,
            bottom: 0,
            borderRadius: 16,
            overflow: 'hidden',
            alignItems: 'center',
        },
        image: {
            width: 100,
            height: 100,
            marginLeft: 10,
            overflow: 'hidden',
            borderRadius: 8
        }
    }
    if (open === true) {
        styles = {
            container: {
                width: Dimensions.get('window').width +3 ,
                height: Dimensions.get('window').width,
                resizeMethod: 'scale',
                resizeMode: 'cover',
                left: -2,
                right: 0,
                flexDirection: 'column',
                columnGap: 16,
                justifyContent: 'flex-end',
            },
            counterBlock: {
                display: 'flex',
                flexDirection: 'row',
                columnGap: 12,
                alignItems: 'center',
                paddingBottom: 10,
                left: 11,
                // bottom: 16
            },
            name: {
                position: 'absolute',
                top: 10,
                left: 12,
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
                width: '100%',
                alignItems: 'center',
            },
            imgPosititon: {
                // top: -16,
                position: 'absolute',
                right: 0,
                zIndex: -1,
                alignItems: 'center'
                // overflow: 'hidden',
            },
            openImage: {
                // alignSelf: 'center',
                // paddingBottom: 26,
                resizeMode: 'cover',
                left: 1,
                height: Dimensions.get('window').width,
                width: Dimensions.get('window').width +1,
                // alignItems: 'center',
            },
            nonContainer: {
                position: 'relative',
                // top: 0,
                // left: 0,
                // left: 21.5,
                // alignSelf: 'center',
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').width,
                overflow: 'hidden',
                // alignItems: 'center',
            },
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
                                    <TouchableOpacity onPress={() => {
                                        setOpen(false)
                                    }} activeOpacity={1}>
                                        <Image style={styles.openImage} source={{uri: `${preview}`}}/>
                                    </TouchableOpacity>

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