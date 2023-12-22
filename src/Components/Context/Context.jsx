import {createContext, useState} from "react";
import {Appearance} from "react-native";

const ThemeContext = createContext()
const CartContext = createContext()
const PageContext = createContext()
const BonusContext = createContext()
const CategoryContext = createContext()
const ProductContext = createContext()


const Context = ({children}) => {
    // const [useBonus, setUseBonus] = useState('')
    const [theme, SetTheme] = useState('light')
    const colorSheme = Appearance.getColorScheme()
    if (colorSheme === 'dark' ) {
        SetTheme('dark')
    }
    const [cartItems, setCartItems] = useState([])
    const [route, setRoute] = useState('')
    const [Category, setCategory] = useState([])
    console.log('ss' + colorSheme)
    const [Product, setProduct] = useState([])
    const increment = () => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? {...item, quantity: item.quantity + 1} : item))
    }
    const decrement = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => item.id === id && item.quantity > 1 ? {
                ...item,
                quantity: item.quantity - 1
            } : item))
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
    const card = {
        cartItems,
        setCartItems,
        increment,
        decrement
    }

    return (
        <ThemeContext.Provider value={context}>
            <CartContext.Provider value={card}>
                <PageContext.Provider value={pages}>
                    <CategoryContext.Provider value={catCon}>
                        <ProductContext.Provider value={prodCon}>
                            {children}
                        </ProductContext.Provider>
                    </CategoryContext.Provider>
                </PageContext.Provider>
            </CartContext.Provider>
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
