import { createContext, useState } from "react";

const ThemeContext = createContext()
const CartContext = createContext()
const Context = ({children}) => {
    const [ theme, SetTheme ] = useState('light')
    const [ cartItems, setCartItems ] = useState([])

    const increment = () => {
        setCartItems((prevItems) =>
        prevItems.map((item) =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item))
    }

    const decrement = (id) => {
        setCartItems((prevItems) =>
        prevItems.map((item) => item.id === id && item.quantity > 1 ? {...item, quantity : item.quantity - 1} : item))
    }

    const remove = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
    }
    // const increment = (id) => {
    //     let ids = cart.map(el.id)
    //     if (ids.includes(id)) {
    //         setCart(cart.map(el => {
    //             if (el.id === id) {
    //                 id.qt++
    //                 console.log(id)
    //             }
    //             return el
    //         }))
    //     } else {
    //         setCart([...cart, {id, qt: 1}])
    //     }
    // }
    // const decrement = (id) => {
    //     let ids = cart.map(el => el.id)
    //     if (ids.includes(id)) {
    //         setCart(cart.map(el => {
    //             if (el.id === id) {
    //                 el.qt
    //             }
    //             return el
    //         }))
    //     }
    // }

    const context = {
        theme, 
        SetTheme,
    }

    const card = {
        cartItems,
        setCartItems,
        increment,
        decrement
    }

    return (
        <ThemeContext.Provider value={context}>
            <CartContext.Provider value={card}>
                {children}
            </CartContext.Provider>
        </ThemeContext.Provider>
    )
}


// const сartContext = ({children}) =>
//     return (
//         <CartContext.Provider value={{context}}>
//             {children}
//         </CartContext.Provider>
//     )
// }
//
export {
    Context,
    ThemeContext,
    CartContext
}

