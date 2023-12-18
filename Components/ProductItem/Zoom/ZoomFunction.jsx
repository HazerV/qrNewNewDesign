import { GestureDetector, Gesture,  GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    runOnJS,
} from 'react-native-reanimated';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import {useRef} from "react";
import {Dimensions} from "react-native";

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
        .onEnd(() => {
            scale.value = 1
            contextScale.value = scale.value
        })
        .onStart((event) => {
            console.log('coords', event)
            runOnJS(impactAsync)(ImpactFeedbackStyle.Medium)
            offset.value.x = (event.absoluteX / 2) ;
            offset.value.y = (event.absoluteY  / 2) ;
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
            scale.value = 1.5
        })
    const composedGestures =  Gesture.Simultaneous(longPressGesture, Gesture.Simultaneous(panGesture, pinchGesture))
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offset.value.x  },
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
