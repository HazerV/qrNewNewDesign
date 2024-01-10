import React, {useContext, useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";
import {ThemeContext} from "../Context/Context";
import axios from "axios";
import {SvgUri} from "react-native-svg";
import {config} from "../../../config";

const Header = () => {

    const [data, setData] = useState([])
    const server = 'https://api.menu.true-false.ru/api/config'
    const [loading, setLoading] = useState([])

    useEffect(() => {
        axios.get(server, { headers: { 'SubDomain': 'zaryadye' } })
            .then((res) => {
                setData(res.data.data)
                // console.log(res.data.data)
            })
            .catch((err) => {
                console.dir(err)
            })
    }, []);

    // console.log('url', data.logo_light)
    const {theme} = useContext(ThemeContext)

    if (theme === 'dark') {
        return (
            <View style={styles.container}>
                <SvgUri uri={config.storage + data.logo_light}/>
            </View>)
    } else {
        return (
            <View style={styles.container}>
                <SvgUri uri={config.storage + data.logo_dark}/>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 16,
        marginBottom: 16,
        marginLeft: -16,
        width: 238,
        height: 128
    }
})

export default Header