import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Desert from '../Images/Desert.png'
import Water from '../Images/Water.png'
import Drinks from '../Images/Drinks.png'
import Bruskett from '../Images/Bruskett.png'
import ProductItem from "../ProductItem/ProductItem";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {

    const navigation = useNavigation()


    return (
        <View style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            columnGap: 32,
            justifyContent: 'center',
            rowGap: 16
        }}>
            <Image source={Desert} />
            <TouchableOpacity onPress={() => {navigation.navigate('Categories')}}>
                <Image source={Bruskett} />
            </TouchableOpacity>
            <Image source={Water} />
            <Image source={Drinks} />
        </View>
    )

}

export default Categories