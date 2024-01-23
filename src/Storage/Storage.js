// import {useContext, useEffect} from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import {config} from "../../config";
// import {CartContext} from "../Components/Context/Context";
//
// export function storageLoad() {
//
//     const {setCartId} = useContext(CartContext)
//     return (
//         useEffect(() => {
//             (async function () {
//                 const ci = await AsyncStorage.getItem('cartId');
//                 if (ci) {
//                     const res = await axios.get(`${config.server}/carts/${ci}`, {headers: {'SubDomain': 'zaryadye'}})
//                         .then(res => {
//                             return res.data
//                         }).catch(err => {
//                             console.log('CART ERROR: ', err)
//                         })
//                     setCartId(res.data.id)
//                     console.log('1 cart ', res)
//                 } else {
//                     const res = await axios.get(`${config.server}/carts`, {headers: {'SubDomain': 'zaryadye'}})
//                         .then(res => res.data.data)
//                         .catch(err => {
//                             console.log('CART ERROR: ', err)
//                         })
//                     await AsyncStorage.setItem('cartId', res.id.toString());
//                 }
//             })()
//             // console.log('cii', cartId)
//         }, [])
// )
// }