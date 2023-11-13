// import React, {useContext, useState} from "react";
// import {Modal, Text, TouchableOpacity, View} from "react-native";
// import MiniCartProduct from "./MiniCartProduct";
// import LineSvg from "../Images/Line.svg";
// import AddToCartBtn from "../../Pages/Category/AddToCartBtn";
// import CartButton from "./CartButton";
// import {ThemeContext} from "../Context/Context";
//
// const CartModal = () => {
//
//     const [visible, setVisible] = useState(false)
//     const show = () => setVisible(true)
//     const hide = () => setVisible(false)
//     const {theme} = useContext(ThemeContext)
//
//     return (
//         <View>
//             <Modal
//                 onRequestClose={hide}
//                 transparent={true}
//                 visible={visible}
//                 animationType='slide' >
//                 {
//                     visible === false ? (
//                         <View>
//                             <Text> nothing </Text>
//                         </View>
//                     ) : (
//                         <View style={styles.modal}>
//                             <Text style = {styles.modalName}>
//                                 Корзина
//                             </Text>
//                             <MiniCartProduct price={450} count={2} sum={900} />
//                             <MiniCartProduct price={450} count={2} sum={900} />
//                             <MiniCartProduct price={450} count={2} sum={900} />
//                             <LineSvg style={{alignSelf: 'center'}} />
//                             <View style={{
//                                 flexDirection: 'row',
//                                 justifyContent: 'center',
//                                 paddingTop: 16
//                             }}>
//                                 <Text style={{
//                                     fontFamily: 'Gilroy-Regular',
//                                     fontSize: 16,
//                                     color: "rgba(187, 187, 187, 1)",
//                                     lineHeight: 20,
//                                     alignSelf: 'center'
//                                     // padding: 16
//                                 }}>
//                                     Итого:
//                                 </Text>
//                                 <Text style={{
//                                     fontFamily: 'Gilroy-Regular',
//                                     fontSize: 16,
//                                     color: "rgba(187, 187, 187, 1)",
//                                     lineHeight: 20
//                                 }}>
//                                     {' '} 1 350 руб
//                                 </Text>
//                             </View>
//                             <View style={{
//                                 paddingLeft: 72,
//                                 paddingTop: 16
//                             }}>
//                                 <AddToCartBtn/>
//                             </View>
//                         </View>
//
//                     )
//                 }
//             </Modal>
//             <CartButton />
//         </View>
//     )
// }
//
// export default CartModal