import React, {useEffect} from "react";
import {createContext, useState} from "react";
import axios from "axios";
import {config} from "../../../config";
const ThemeContext = createContext()
const CartContext = createContext()
const PageContext = createContext()
const CategoryContext = createContext()
const ProductContext = createContext()

const Context = ({children}) => {
    const [theme, SetTheme] = useState('light')
    const [route, setRoute] = useState('')
    const [Category, setCategory] = useState([])
    const [Product, setProduct] = useState([])

    let cart = [{
        id: {},
        lines: [
            {}
        ],
        totalPrice: {}
    }]

    // const serverUrl = config.getProductUrl
    // const getCart = () => {
    //     axios.get(`${serverUrl}/api/carts`, {headers: {'SubDomain': 'zaryadye'}})
    //         .then(
    //             res => {
    //                 cart.id=(res.data.data.id)
    //                 console.log('ctx', cart.id)
    //             }
    //         )
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    // function findLineByProductId (key) {
    //     return cart.lines.filter(l => l.productId = key)
    // }

    const cartCtx = {
        cart,
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

    return (
        <ThemeContext.Provider value={context}>
            <PageContext.Provider value={pages}>
                <CategoryContext.Provider value={catCon}>
                    <CartContext.Provider value={cartCtx}>
                        <ProductContext.Provider value={prodCon}>
                        {children}
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
    ProductContext
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