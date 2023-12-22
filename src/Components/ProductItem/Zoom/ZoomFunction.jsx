import { GestureDetector, State, Gesture,  GestureHandlerRootView} from 'react-native-gesture-handler';
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
            scale.value = contextScale.value * event.scale
            offset.value.x = (event.focalX / 2) * (1 - event.scale);
            offset.value.y = (event.focalY  / 2) * (1 - event.scale);
        })
        .onEnd(() => {
            contextScale.value = scale.value;
        })
    const longPressGesture = Gesture.LongPress()
        .onStart((event) => {
            console.log('coords', event)
            runOnJS(impactAsync)(ImpactFeedbackStyle.Medium)
            const imageX = 0
            const imageY = 0
            const scaleFactor = 2
            offset.value = {
                x: 0 - (1.5 - 1) * (event.absoluteX),
                y: 0 - (1.5 - 1) * (event.absoluteY)
                // x: event.absoluteX - scaleFactor * event.x,
                // y: event.absoluteY - scaleFactor * event.y
            }
            console.log('xxx', offset.value.x)
            scale.value = 1.8
            contextScale.value = 2
        })
        .onEnd(() => {
            offset.value = {
                x: 0,
                y: 0
            }
            scale.value = 1
            contextScale.value = scale.value
        })
    const panGesture = Gesture.Pan()
        .averageTouches(true)
        .onStart((e) => {
            pressed.value = true
            console.log('pan', e)
        } )
        .onUpdate((e) => {
            offset.value = {
                x: e.translationX,
                y: e.translationY,
            }
        })
        .onEnd(() => {
            offset.value = withSpring({x: 0,y: 0})
            // pressed.value = false
            scale.value = 1
        })
    const composedGestures =  Gesture.Simultaneous(longPressGesture, Gesture.Simultaneous(panGesture, pinchGesture))
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: 0 },
                { translateY: 0 },
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
