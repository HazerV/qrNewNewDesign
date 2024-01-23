import React, {useEffect} from "react";
import {createContext, useState} from "react";
import axios from "axios";
import {config} from '../../../config'
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext()
const CartContext = createContext()
const PageContext = createContext()
const CategoryContext = createContext()
const ProductContext = createContext()
const LineContext = createContext()


const Context = ({children}) => {
    const [theme, SetTheme] = useState('light')
    const [route, setRoute] = useState('')
    const [Category, setCategory] = useState([])
    const [Product, setProduct] = useState([])

    const [cartId, setCartId] = useState(0)
    const [line, setLine] = useState([])

    const linez = {
        line,
        setLine
    }

    let cart = {
        id: cartId,
        lines: [line],
        totalPrice: {}
    }

    const cartCtx = {
        cart,
        cartId,
        setCartId
    }
    const prodCon = {
        Product,
        setProduct
    }
    const catCon = {
        Category,
        setCategory
    }
    const context = {
        theme,
        SetTheme,
    }
    const pages = {
        route,
        setRoute
    }



    useEffect(() => {
        (async function () {
            const ci = await AsyncStorage.getItem('cartId');
            if (ci) {
                const res = await axios.get(`${config.server}/carts/${ci}`, {headers: {'SubDomain': 'zaryadye'}})
                    .then(res => {
                        return res.data
                    }).catch(err => {
                        console.log('CART ERROR: ', err)
                    })
                setCartId(res.data.id)
                // console.log('1 cart ', res)
            } else {
                const res = await axios.get(`${config.server}/carts`, {headers: {'SubDomain': 'zaryadye'}})
                    .then(res => res.data.data)
                    .catch(err => {
                        console.log('CART ERROR: ', err)
                    })
                await AsyncStorage.setItem('cartId', res.id.toString());
            }
        })()
    }, []);

    return (
        <ThemeContext.Provider value={context}>
            <PageContext.Provider value={pages}>
                <CategoryContext.Provider value={catCon}>
                    <CartContext.Provider value={cartCtx}>
                        <ProductContext.Provider value={prodCon}>
                            <LineContext.Provider value={linez}>
                                {children}

                            </LineContext.Provider>
                        </ProductContext.Provider>
                    </CartContext.Provider>
                </CategoryContext.Provider>
            </PageContext.Provider>
        </ThemeContext.Provider>
    )
}
export {
    Context,
    ThemeContext,
    CartContext,
    PageContext,
    CategoryContext,
    ProductContext,
    LineContext,
}

// const increment = () => {
//     setCartItems((prevItems) =>
//         prevItems.map((item) =>
//             item.id === id ? {...item, quantity: item.quantity + 1} : item))
// }
// const decrement = (id) => {
//     setCartItems((prevItems) =>
//         prevItems.map((item) => item.id === id && item.quantity > 1 ? {
//             ...item,
//             quantity: item.quantity - 1
//         } : item))
// }