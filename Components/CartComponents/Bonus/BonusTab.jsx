import React, {useContext, useState} from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import {ThemeContext} from "../../Context/Context";
import ArrowWhiteSvg from '../icons/ArrowWhite.svg'
import ArrowBlackSvg from '../icons/ArrowBlack.svg'

const BonusTab = () => {

    const {theme} = useContext(ThemeContext);

    const styles = {
        container: {
            width: 272,
            height: 164,
            borderRadius: 16,
            borderWidth: 2,
            backgroundColor: theme === 'light' ? 'white' : '#333333',
            borderColor: 'gray',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        headText: {
            fontFamily: 'Gilroy-Regular',
            color: theme === 'light' ? 'black' : 'white',
            fontSize: 16,
            lineHeight: 18,
            marginLeft: 16
        },
        useBonusesText: {
            fontFamily: 'Gilroy-Regular',
            color: theme === 'light' ? 'black' : 'white',
            fontSize: 14,
            lineHeight: 16,
            paddingTop: 11,
            marginLeft: 16,
            paddingBottom: 3
        },
        bonusInput: {
            width: 176,
            height: 48,
            borderWidth: 2,
            borderRadius: 16,
            borderColor: 'gray',
            marginLeft: 16,
            paddingHorizontal: 16,
        },
        textInput: {
            fontFamily: 'Gilroy-Regular',
            color: theme === 'light' ? 'black' : 'white',
            fontSize: 14,
            lineHeight: 16,
            paddingTop: 11,
            // padding: 15,
            marginTop: 5,
        },
        itogText: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            lineHeight: 18,
            color: 'gray',
            marginRight: 6
        },
        itogRow: {
            flexDirection: 'row',
            padding: 6
        },
        itogRowRight: {
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            lineHeight: 18,
            color: theme === 'light' ? 'black' : 'white'
        },
        itogBlock: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 24
        },
        arrowBtnWhite: {
            width: 48,
            height: 48,
            borderWidth: 2,
            borderRadius: 16,
            backgroundColor: 'white',
            borderColor: 'rgba(255, 122, 0, 1)',
            marginLeft: 16,
            alignItems: 'center',
            justifyContent: 'center'
        },
        arrowBtnBlack: {
            width: 48,
            height: 48,
            borderWidth: 2,
            borderRadius: 16,
            backgroundColor: 'black',
            borderColor: 'rgba(255, 122, 0, 1)',
            marginLeft: 16,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }

    const summa = 1350
    const countBonuses = 500;
    const bonusesToUse = 500/2;
    const [useBonus, setUseBonus] = useState('0');
    const [bonusState, setBonusState] = useState(bonusesToUse)

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.headText}>
                    Ваши бонусы {countBonuses} бонусов. Доступно к списанию {bonusesToUse}
                </Text>
                <View>
                    <Text style={styles.useBonusesText}>
                        Применить бонусы
                    </Text>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={styles.bonusInput}
                                keyboardType='numeric'
                                onChangeText={newText => setBonusState(newText)}
                                maxLength={3}
                                >
                                <Text style={styles.textInput}>
                                    {bonusState}
                                </Text>
                            </TextInput>
                            <TouchableOpacity onPress={() => {
                                setUseBonus(bonusState)
                            }}>
                                {
                                    theme === 'light' ? (
                                        <View style={styles.arrowBtnWhite}>
                                            <ArrowWhiteSvg/>
                                        </View>
                                    ) : (
                                        <View style={styles.arrowBtnBlack}>
                                            <ArrowBlackSvg />
                                        </View>
                                    )
                                }

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.itogBlock}>
                <View>
                    <View style={styles.itogRow}>
                        <Text style={styles.itogText}>
                            Подытог:
                        </Text>
                        <Text style={styles.itogRowRight}>
                            {summa} руб
                        </Text>
                    </View>
                    <View style={styles.itogRow}>
                        <Text style={[styles.itogText, {marginLeft: 2}]}>
                            Бонусы:
                        </Text>
                        <Text style={styles.itogRowRight}>
                            {useBonus} руб
                        </Text>
                    </View>
                    <View style={[styles.itogRow,
                        {
                            paddingLeft: 15,
                            paddingBottom: 24
                        }
                    ]}>
                        <Text style={[styles.itogText, {marginRight: 6}]}>
                            Итого:
                        </Text>
                        <Text style={styles.itogRowRight}>
                            {summa - useBonus} руб
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )

}

export default BonusTab