import React, {useEffect, useContext} from "react";
import axios from "axios";
import {CartContext} from "../Context/Context";
import EncryptedStorage from "react-native-encrypted-storage";
import {config} from "../../../config";

const ApiService = () => {

    let cart = useContext(CartContext)
    let cartId = 123
    const serverUrl = config.server
    console.log(cart)
    const getCart = () => {
        axios.get(`${serverUrl}/api/carts`, {headers: {'SubDomain': 'zaryadye'}})
            .then(
                res => {
                    cart.id=(res.data.data.id)
                    console.log('ctx', cart.id)
                }
            )
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {

        getCart()
    }, []);

    return (
        getCart()
    )
}

export default ApiService