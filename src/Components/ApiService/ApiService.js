import React, {useEffect, useContext} from "react";
import axios from "axios";
import {CartContext} from "../Context/Context";
import {config} from "../../../config";

const ApiService = () => {

    let {cartId, setCartId} = useContext(CartContext)
    const serverUrl = config.server
    const getCart = () => {
        axios.get(`${serverUrl}/carts`, {headers: {'SubDomain': 'zaryadye'}})
            .then(
                res => {
                    setCartId(res.data.data.id)
                    console.log('CART', cartId)
                }
            )
            .catch(err => {
                console.log('CART ERROR', err)
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