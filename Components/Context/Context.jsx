import { createContext, useState } from "react";

const ThemeContext = createContext()
const CartContext = createContext()

const Context = ({children}) => {

    const [ theme, SetTheme ] = useState('light')
    

    const context = {
        theme, 
        SetTheme
    }

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    )
}

export {
    Context,
    ThemeContext
}