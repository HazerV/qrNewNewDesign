import React, {useState, useContext} from "react";
import Imageee from './Image.png'
import {Dimensions, Image, TouchableOpacity, useWindowDimensions, View} from "react-native";
import {ThemeContext} from "../Context/Context";


const Images = () => {

    const styles = {
        image: {
            width: 100,
            height: 100,
            borderRadius: 8,
            marginLeft: 10
        },
        nonContainer: {
            position: 'absolute',
            top: 0,
            right: 0,
            left: -150
        },
    }

    const {theme} = useContext(ThemeContext)

    const [open, setOpen] = useState(false)
    return(
        <View>
            <TouchableOpacity onPress={() => {
                open === false ? (
                    setOpen(true)
                ) : (setOpen(false))
                console.log(open)
            }}>
                {
                    open === false ? (
                        <Image style={styles.image} source={Imageee}/>
                    ) : (
                        <View style={styles.nonContainer}>
                            <Image style={{width: 150, height: 150,}} source={Imageee}/>
                        </View>
                    )
                }
            </TouchableOpacity>
        </View>
    )
}

export default Images