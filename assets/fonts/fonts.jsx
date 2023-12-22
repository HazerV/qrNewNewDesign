import * as Font from "expo-font"

const useFonts = async () => {
    await (Font.loadAsync({
        'Gilroy-Medium': require('./Gilroy-Medium.ttf'),
        'Gilroy-Thin': require('./Gilroy-Thin.ttf'),
        'Gilroy-Regular': require('./Gilroy-Regular.ttf'),
        'Gilroy-SemiBold': require('./Gilroy-Semibold.ttf')
    }))
}

export default useFonts;    