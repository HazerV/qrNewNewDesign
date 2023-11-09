import React, {useState, Dispatch, useEffect, useRef } from "react";
import {TextInput, View, TouchableOpacity, Text, SafeAreaView, ScrollView } from "react-native";
import Header from '../../Components/Header/Header'
import Svg1 from './SvgImgs/svg1.svg'

const InputComponent = ({ id, currentInput, setCurrentInput }) => {

    const [value, setValue] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        if (id === currentInput) {
            inputRef.current?.focus()
        }
        if (currentInput === 4) {
            inputRef.current?.blur()
        }
        console.log('current input' + currentInput)
        console.log('id: ' + id)
    }, [currentInput]);

    return (
        <TextInput
            ref={inputRef}
            value={value}
            maxLength={1}
            keyboardType={'number-pad'}
            onChange={(e) => {
                const targetValue = e.target.value.replace(/\D/, '')
                setValue(targetValue)
                targetValue ? setCurrentInput(id + 1) : null
            }}
            onKeyDown={(e) => {
                if (e.key === 'Backspace') {
                    if (id === 3 && currentInput === 4) {
                        id = 4
                        setCurrentInput(id - 1)
                    } else {
                        setCurrentInput(id - 1)
                    }
                }
            }}/>)
}
        const CodePage = () => {
            const [currentInput, setCurrentInput] = useState(0)

            const styles = {
                areaView: {
                    backgroundColor: 'black',
                    width: '100%',
                    height: '100%'
                },
                container: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                view: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 0, left: 0,
                    right: 0, bottom: -550,
                },
                welcome: {
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: 16,
                    fontFamily: 'Gilroy-SemiBold',
                    lineHeight: 18,
                },
                tableText: {
                    color: 'rgba(255, 255, 255, 0.7)',
                    width: '70%',
                    marginTop: 20,
                    textAlign: 'center',
                    fontFamily: 'Gilroy-Regular',
                    fontSize: 14,
                    lineHeight: 16
                },
                inputCode: {
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: 14,
                    fontFamily: 'Gilroy-Regular',
                    lineHeight: 18,
                    marginTop: 32
                },
                svgContainer: {
                    position: 'relative',
                    zIndex: 5,
                    width: 48,
                    height: 48,
                    color: '#fff',
                    textAlign: 'center',
                    alignItems: 'center'
                }
            }

            return (
                <SafeAreaView style={styles.areaView}>
                            <View style={styles.container}>
                                <Header />
                                <View style={styles.view}>
                                    <Text style={styles.welcome}>
                                        Добро пожаловать!
                                    </Text>
                                    <Text style={styles.tableText}>
                                        Стол №7 сейчас забронирован.
                                        Вы можете подключиться к меню и оформлению заказа введя код доступ к столу
                                    </Text>
                                    <Text style={styles.inputCode}>
                                        Введите код доступа
                                    </Text>
                                    <View style={{
                                        marginTop: 12,
                                        display: 'flex',
                                        columnGap: 16,
                                        flexDirection: 'row'
                                    }}>
                                        <View style={styles.svgContainer}>
                                            <View style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0
                                            }}>
                                                <InputComponent id={0} currentInput={currentInput} setCurrentInput={setCurrentInput} />
                                            </View>
                                            <Svg1/>
                                        </View>
                                        <View style={styles.svgContainer}>
                                            <Svg1/>
                                            <InputComponent id={0} currentInput={currentInput} setCurrentInput={setCurrentInput} />
                                        </View>
                                        <View style={styles.svgContainer}>
                                            <InputComponent id={0} currentInput={currentInput} setCurrentInput={setCurrentInput} />
                                            <Svg1/>
                                        </View>
                                        <View style={styles.svgContainer}>
                                            <InputComponent id={0} currentInput={currentInput} setCurrentInput={setCurrentInput} />
                                            <Svg1/>
                                        </View>
                                    </View>
                                </View>
                            </View>
                </SafeAreaView>
            )
        }


export default CodePage

