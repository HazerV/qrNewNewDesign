import React, {useContext, useEffect, useState} from "react";
import {View} from "react-native";
import {ThemeContext} from "../Context/Context";
import HeaderBlack from '../Header/HeaderBlack.svg'
import HeaderLight from '../Header/HeaderLight.svg'
import axios from "axios";
import {SvgUri} from "react-native-svg";


const Header = () => {

    const [data, setData] = useState([])
    const server = 'https://api.menu.true-false.ru/api/config'
    useEffect(() => {
        axios.get(server, {
            headers: {'SubDomain': 'zaryadye'}
        })
            .then((res) => {
                console.log(res.data.data.logo_light)
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    const {theme} = useContext(ThemeContext)

    const styles = {
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
    }

    if (theme === 'dark') {
        return (
            <View style={styles.container}>
                <SvgUri uri={'https://api.menu.true-false.ru/storage/' + data.logo_light}/>
            </View>)
    } else {
        return (
            <View style={styles.container}>
                <SvgUri uri={'https://api.menu.true-false.ru/storage/' + data.logo_dark}/>
            </View>)
    }
}

export default Header