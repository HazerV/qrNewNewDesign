import { GestureDetector, Gesture,  GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import {Children} from "react";

const ZoomFunction =  ({children}) => {
    const offset = useSharedValue({ x: 0, y: 0 });
    const start = useSharedValue({ x: 0, y: 0 });
    const scale = useSharedValue(1);
    const savedScale = useSharedValue(1);
    const rotation = useSharedValue(0);
    const savedRotation = useSharedValue(0);
    const popupPosition = useSharedValue({ x: 0, y: 0 });
    const popupAlpha = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offset.value.x },
                { translateY: offset.value.y },
            ],
        };
    });
    const zoomGesture = Gesture.Pinch()
        .onUpdate((event) => {
            scale.value = savedScale.value * event.scale
        })
        .onEnd(() => {
            savedScale.value = scale.value
        })

    const dragGesture = Gesture.Pan()
        .averageTouches(true)
        .onUpdate((e) => {
            offset.Value = {
                x: e.translationX + start.value.x,
                y: e.translationY + start.value.y,
            }
        })
        .onEnd(() => {
            start.value = {
                x: offset.value.x,
                y: offset.value.y,
            }
        })
        .onStart(() => {
            start.value = {
                x: 1,
                y: 1
            }
        })
    const longPressGesture = Gesture.LongPress().onStart((_event) => {
        popupPosition.value = { x: offset.value.x, y: offset.value.y };
        popupAlpha.value = withTiming(1);
        console.log('s')
    });
    const composed = Gesture.Simultaneous(
        longPressGesture,
        Gesture.Simultaneous(dragGesture, zoomGesture)
    )

    return  (
        <>
            {Children.map(children, child => {
                return (
                    <GestureHandlerRootView>
                        <Animated.View>
                            <GestureDetector gesture={longPressGesture}>
                                {child}
                            </GestureDetector>
                        </Animated.View>

                    </GestureHandlerRootView>
                )
            }
            )}
        </>
    );
}

export default ZoomFunction