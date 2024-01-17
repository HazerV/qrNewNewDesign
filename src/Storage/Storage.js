import {useContext} from "react";
import {CartContext} from "../Components/Context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Storage = async (cartId) => {

    const [cartId, setCartId] = useContext(CartContext)

    const value = await AsyncStorage.getItem(cartId)
    if (value !== null) {
        console.log('Storage', cartId)
    }
}

export default Storage