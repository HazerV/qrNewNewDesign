import React, {useContext, useState} from "react";
import {Text, View, Image, SafeAreaView, TouchableOpacity} from "react-native";
import {ThemeContext} from "../Context/Context";
import Imageee from '../ProductItem/Image.png'

const MiniProductForPay = ({price, count, sum}) => {

    const {theme} = useContext(ThemeContext)
    const name = 'Брускетта с ростбифом'

    const styles = {
        container: {
            padding: 16,
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            // paddingLeft: 32
        },
        nameProduct: {
            color: theme === 'light' ? 'black' : 'white',
            fontSize: 16,
            lineHeight: 20,
            fontFamily: 'Gilroy-Regular'
        },
        countes: {
            color: 'rgba(187, 187, 187, 1)',
            fontFamily: 'Gilroy-Regular',
            lineHeight: 16,
            fontSize: 14,
            paddingTop: 4
        },
        chooseProduct: {
            width: 99,
            height: 27,
            borderWidth: 2,
            borderRadius: 20,
            backgroundColor: '#555555',
            justifyContent: 'center',
            position: 'relative',
            borderColor: '#555555',
            marginTop: 8
        },
        chosenProduct: {
            width: 99,
            height: 27,
            borderWidth: 2,
            borderRadius: 20,
            backgroundColor: '#FF7A00',
            justifyContent: 'center',
            borderColor: '#555555',
            marginTop: 8
        },
        chooseText: {
            fontSize: 12,
            lineHeight: 14,
            fontFamily: 'Gilroy-Regular',
            color: 'white',
            textAlign: 'center',
        }
    }

    const [pressed, setPressed] = useState(false)
    console.log(pressed)

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.nameProduct}>
                    Брускетта с ростбифом
                </Text>
                <Text style={styles.countes}>
                    {price} x {count} = {sum} руб
                </Text>
                <TouchableOpacity onPress={() => {
                    if (pressed === false) {
                        setPressed(true)
                    } else {
                        setPressed(false)
                    }
                }}>
                    {
                        pressed === false ? (
                            <View style={styles.chooseProduct}>
                                <Text style={styles.chooseText}>
                                    ВЫБРАТЬ
                                </Text>
                            </View>
                        ) : (
                            <View style={styles.chosenProduct}>
                                <Text style={styles.chooseText}>
                                    ВЫБРАН
                                </Text>
                            </View>
                        )
                    }
                </TouchableOpacity>
            </View>
            <View style={{
                paddingLeft: 90
            }}>
                <Image style={{width: 64, height: 64}} source={Imageee}/>
            </View>

        </View>
    )

}

export default MiniProductForPay

// <SafeAreaView styles={{
//     width: '90%'
// }}>
//     <View styles={{
//         paddingBottom: 16,
//         padding: 100
//     }}>
//         <Text style={styles.name}>
//             Брускетта с ростбифом
//         </Text>
//         <View style={{
//             flexDirection: 'row',
//         }}>
//             <Text style={{
//                 color: 'rgba(187, 187, 187, 1)',
//                 fontSize: 14,
//                 lineHeight: 17,
//                 fontFamily: 'Gilroy-Regular',
//                 paddingTop: 4
//             }}>
//                 {price} руб x {count} = {sum} руб
//             </Text>
//         </View>
//         <View style={{
//             position: 'absolute',
//             paddingLeft: 200,
//             paddingBottom: 32
//         }}>
//             <Image style={{width: 64, height: 64}} source={Imageee}/>
//         </View>
//     </View>
// </SafeAreaView>