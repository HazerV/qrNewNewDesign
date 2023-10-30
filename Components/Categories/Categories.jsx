import React from "react";
import { View, Image } from "react-native";
import Desert from '../Images/Desert.png'
import Water from '../Images/Water.png'
import Drinks from '../Images/Drinks.png'
import Bruskett from '../Images/Bruskett.png'


const Categories = () => {

    return (
        <View style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            columnGap: 32,
            justifyContent: 'center',
            rowGap: 16
        }}>
            <Image source={Desert} />
            <Image source={Bruskett} />
            <Image source={Water} />
            <Image source={Drinks} />
            
        </View>
    )

}

export default Categories