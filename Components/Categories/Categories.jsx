import React, {useEffect, useState} from "react";
import {View, Image, TouchableOpacity, Text} from "react-native";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";

const Categories = () => {

    const [path, setPath] = useState(null)
    const serverUrl = 'https://api.menu.true-false.ru/api'

    const getName = () => {
        axios.get(`${serverUrl}/categories`, {
            headers: { 'SubDomain': 'zaryadye' }
        })
            .then(res => {
                setPath(res.data.data.forEach(g => {g.preview}))
                console.log(res.data.data.forEach(g => {
                    console.log(g.preview)
                }))
            })
            .catch(err => console.log(err))
    }


const navigation = useNavigation()
const styles = {
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        columnGap: 16,
        justifyContent: 'center',
        rowGap: 16,
        width: '100%'
    }
}
return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            navigation.navigate('Categories')
        }}>
            <Image style={{
                width: 176, height: 250
            }} source={{uri: `${serverUrl}/storage/${getName()}`}}/>
        </TouchableOpacity>
    </View>
)

}

export default Categories