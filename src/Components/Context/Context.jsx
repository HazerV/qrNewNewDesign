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

    const [cartId, setCartId] = useState([])

    let cart = [{
        id: {cartId},
        lines: [
            {}
        ],
        totalPrice: {}
    }]


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