import { GestureDetector, Gesture,  GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    runOnJS,
} from 'react-native-reanimated';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';

const ZoomFunction =  ({children}) => {

    const offset = useSharedValue({ x: 0, y: 0 });
    const pressed = useSharedValue(false);
    const scale = useSharedValue(1);
    const contextScale = useSharedValue(1);
    const pinchGesture = Gesture.Pinch()
        .onUpdate((event) => {
            scale.value = contextScale.value * event.scale   ///
        })
        .onEnd(() => {
            contextScale.value = scale.value      //
        })

    const longPressGesture = Gesture.LongPress()
        .onEnd(() => {
            scale.value = 1
            contextScale.value = scale.value      //
        })
        .onStart(() => {
            runOnJS(impactAsync)(ImpactFeedbackStyle.Medium)
            scale.value = 2
            contextScale.value = 2
        });
    const panGesture = Gesture.Pan()
        .averageTouches(true)
        .onStart(() => (pressed.value = true))
        .onUpdate((e) => {
            offset.value = {
                x: e.translationX,
                y: e.translationY,
            }
        })
        .onEnd(() => {
            offset.value = withSpring({x: 0,y: 0})
            pressed.value = false
            // scale.value = 1.5
        })


    const composedGestures =  Gesture.Simultaneous(longPressGesture, Gesture.Simultaneous(panGesture, pinchGesture))
    const composedGestures1 =  Gesture.Simultaneous(panGesture, pinchGesture)

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offset.value.x },
                { translateY: offset.value.y },
                { scale:  withSpring(scale.value) }
            ],
            zIndex: pressed.value ? 2 : 0
        };
    });
    return  (
        <GestureHandlerRootView>
            <GestureDetector gesture={composedGestures}>
                <Animated.View style={animatedStyles}>
                    {children}
                </Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
    );
}

export default ZoomFunction
