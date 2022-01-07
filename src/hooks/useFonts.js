import * as Font from "expo-font";

export default useFonts = async () =>
    await Font.loadAsync({
        'Inter': require('../assets/fonts/Inter-Regular.ttf'),
        'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),

        'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
    });