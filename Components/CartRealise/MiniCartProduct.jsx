import React, {useContext} from "react";
import {Text, View, Image, SafeAreaView} from "react-native";
import {ThemeContext} from "../Context/Context";
import Imageee from '../ProductItem/Image.png'

const MiniCartProduct = ({price, count, sum }) => {

    const theme = useContext(ThemeContext)
    const name = 'Брускетта с ростбифом'

    return (
        <View style={{
            padding: 4,
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            paddingLeft: 32
        }}>
            <View>
            <Text style={{
                color: theme === 'light' ? 'white' : 'black',
                fontSize: 16,
                lineHeight: 20,
                fontFamily: 'Gilroy-Regular'
            }}>
                Брускетта с ростбифом
            </Text>
            <Text style={{
                color: 'rgba(187, 187, 187, 1)',
                fontFamily: 'Gilroy-Regular',
                lineHeight: 16,
                fontSize: 14,
                paddingTop: 4
            }}>
                {price} x {count} = {sum} руб
            </Text>
            </View>
            <View style={{
                paddingLeft: 90
            }}>
                <Image style={{width: 64, height: 64}} source={Imageee} />
            </View>
        </View>
    )

}

export default MiniCartProduct

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